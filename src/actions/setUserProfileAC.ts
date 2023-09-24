import {ProfileUserType} from "../Types/types";

export type SetUserProfileACACType = ReturnType<typeof setUserProfileAC>

export const setUserProfileAC = (userProfile: ProfileUserType) => {

    return {
        type: 'SET_USER_PROFILE',
        userProfile
    } as const
}