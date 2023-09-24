import {UserType} from "../Types/types";

export type SetUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    } as const
}