import React from 'react';
import {UsersInitStateType} from "../Types/types";
import {FollowACType} from "../actions/followAC";
import {UnfollowACType} from "../actions/unollowAC";
import {SetUsersACType} from "../actions/setUsersAC";
import {SetPagesACType} from "../actions/setPagesAC";
import {SetCurrentPageACType} from "../actions/setCurrentPageAC";
import {getUsersTC} from "../actions/ThankActions/getUsersTC";
import {SetIsFetchingACType} from "../actions/setIsFetchingAC";

const initState: UsersInitStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

type ActionType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetPagesACType
    | SetCurrentPageACType
    | SetIsFetchingACType

const usersReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.id ? {...el, followed: true} : el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.id ? {...el, followed: false} : el)
            }
        }
        case "SET_USERS": {
            return {
                ...state,
                users: action.payload.users
            }
        }
        case "SET_PAGES": {
            return {...state, totalUsersCount: action.payload.totalUserCount}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default: {
            return state
        }
    }
};

export default usersReducer;