import {Dispatch} from "redux";
import {usersApi} from "../../api/usersApi";
import {unfollowAC} from "../unollowAC";
import {followingProgressAC} from "../followingProgressAC";

export const unfollowTC = (userId: number) => (dispatch: Dispatch) => {
    usersApi.unfollowUser(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(followingProgressAC(userId, false))
        })
}