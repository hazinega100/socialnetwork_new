import React from 'react';
import {InitStateType, PostType} from "../Types/types";
import {v1} from "uuid";
import {AddPostType} from "../actions/addPostAC";
import {IncrLikeCounterType} from "../actions/incrLikeCounterAC";

const initState: InitStateType = {
    profilePage: {
        posts: [],
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'EgaHazin'},
            {id: '2', name: 'Nelly'},
            {id: '3', name: 'Gulbahor'},
        ],
        messages: [
            {message: 'Hi'},
            {message: 'Hello'},
            {message: 'Yo'},
        ],
    }
}

type ActionType = AddPostType | IncrLikeCounterType

const reducer = (state = initState, action: ActionType) => {
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
                profilePage: {
                    ...state,
                    posts: [...state.profilePage.posts, newPost]
                }
            }
        }
        case "INCR_LIKE_COUNTER": {
            console.log(action)
            return {
                ...state,
                profilePage: {
                    ...state,
                    posts: state.profilePage.posts.map(el => el.id === action.payload.id ? {...el, likeCount: el.likeCount + 1} : el)
                }
            }
        }
        default: {
            return state
        }
    }
};

export default reducer;