import {SET_MESSAGES} from "../reducers/auth-reducer";

export type SetMessagesLogInACType = ReturnType<typeof setMessagesLogInAC>

export const setMessagesLogInAC = (messages: string[]) => {

    return {
        type: SET_MESSAGES,
        messages
    } as const
}