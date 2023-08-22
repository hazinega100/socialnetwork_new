import React from 'react';
import {DialogsInitStateType} from "../Types/types";
import {AddMessageType} from "../actions/addMessageAC";
import {v1} from "uuid";

const dialogsInitState: DialogsInitStateType = {
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'EgaHazin'},
            {id: '2', name: 'Nelly'},
            {id: '3', name: 'Gulbahor'},
        ],
        messages: [],
    }
}

type ActionType = AddMessageType

const dialogsReducer = (state = dialogsInitState, action: ActionType) => {
    switch (action.type) {
        case "ADD_MESSAGE": {
            const newMessage = {id: v1(), message: action.payload.message}
            return {
                ...state,
                dialogsPage: {
                    ...state.dialogsPage,
                    messages: [...state.dialogsPage.messages, newMessage]
                }
            }
        }
        default: {
            return state
        }
    }
};

export default dialogsReducer;