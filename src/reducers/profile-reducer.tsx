import React from 'react';
import {PostType, ProfileInitStateType} from "../Types/types";
import {v1} from "uuid";
import {AddPostType} from "../actions/addPostAC";
import {IncrLikeCounterType} from "../actions/incrLikeCounterAC";
import {setUserProfileAC, SetUserProfileACACType} from "../actions/setUserProfileAC";
import {Dispatch} from "redux";
import {usersApi} from "../api/usersApi";

const initState: ProfileInitStateType = {
    posts: [],
    userProfile: null,
    status: 'Нажми, что бы установить статус'
}

type ActionType = AddPostType | IncrLikeCounterType | SetUserProfileACACType | SetStatusType

const profileReducer = (state = initState, action: ActionType): ProfileInitStateType => {
    switch (action.type) {
        case "ADD_POST": {
            const newPost: PostType = {
                id: v1(),
                avatar: action.payload.avatar,
                message: action.payload.message,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case "INCR_LIKE_COUNTER": {
            return {
                ...state,
                posts: state.posts.map(el => el.id === action.payload.id ? {
                    ...el,
                    likeCount: el.likeCount + 1
                } : el)
            }
        }
        case "SET_USER_PROFILE": {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        case "SET-STATUS": {
            return {
                ...state,
                status: action.value
            }
        }
        default: {
            return state
        }
    }
};
// Actions
export const setStatusAC = (value: string) => {
    return {
        type: 'SET-STATUS',
        value
    } as const
}
type SetStatusType = ReturnType<typeof setStatusAC>
// Thunk
export const setUserProfileTC = (userID: number) => {
    return (dispatch: Dispatch) => {
        usersApi.getProfileUser(userID)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
            })
    }
}
export const getStatus = (userID: number) => (dispatch: Dispatch) => {
    usersApi.getUserStatus(userID)
        .then(res => {
            console.log(res.data)
            dispatch(setStatusAC(res.data))
        })
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        usersApi.changeStatus(status)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            })
    }
}

export default profileReducer;