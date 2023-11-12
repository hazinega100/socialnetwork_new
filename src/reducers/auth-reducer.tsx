import React from 'react';
import {SetUserDataACType} from "../actions/setAuthUserDataAC";
import {AuthStateType} from "../Types/types";
import {SetMessagesLogInACType} from "../actions/setMessagesLogInAC";

export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_MESSAGES = 'SET_MESSAGES'

const initState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    messages: []
}

type ActionType = SetUserDataACType
    | SetMessagesLogInACType

const authReducer = (state = initState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        case SET_MESSAGES: {
            return {
                ...state,
                messages: action.messages
            }
        }
        default: {
            return state
        }
    }
};

export default authReducer;