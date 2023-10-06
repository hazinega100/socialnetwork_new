import {Dispatch} from "redux";
import {followAC} from "../followAC";
import {usersApi} from "../../api/usersApi";
import {followingProgressAC} from "../followingProgressAC";

export const followTC = (userId: number) => (dispatch: Dispatch) => {
    usersApi.followUser(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(followingProgressAC(userId, false))
        })
}