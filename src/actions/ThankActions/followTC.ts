import {Dispatch} from "redux";
import {followAC} from "../followAC";
import {usersApi} from "../../api/usersApi";

export const followTC = (userId: number) => (dispatch: Dispatch) => {
    usersApi.followUser(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followAC(userId))
            }
        })
}