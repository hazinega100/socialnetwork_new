import {SET_USER_DATA} from "../reducers/auth-reducer";

export type SetUserDataACType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (id: number, email: string, login: string) => {

    return {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login
        }
    } as const
}