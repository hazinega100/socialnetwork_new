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
    userProfile: null
}

type ActionType = AddPostType | IncrLikeCounterType | SetUserProfileACACType

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
        default: {
            return state
        }
    }
};

export const setUserProfileTC = (userID: number) => {
    return (dispatch: Dispatch) => {
        usersApi.getProfileUser(userID)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
            })
    }
}

export default profileReducer;