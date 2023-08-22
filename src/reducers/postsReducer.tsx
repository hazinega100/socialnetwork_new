import React from 'react';
import {PostsInitStateType, PostType} from "../Types/types";
import {v1} from "uuid";
import {AddPostType} from "../actions/addPostAC";
import {IncrLikeCounterType} from "../actions/incrLikeCounterAC";

const initState: PostsInitStateType = {
    profilePage: {
        posts: [],
    }
}

type ActionType = AddPostType | IncrLikeCounterType

const postsReducer = (state = initState, action: ActionType) => {
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

export default postsReducer;