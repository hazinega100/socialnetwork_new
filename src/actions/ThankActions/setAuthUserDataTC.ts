import {Dispatch} from "redux";
import {setAuthUserDataAC} from "../setAuthUserDataAC";
import {setMessagesLogInAC} from "../setMessagesLogInAC";
import {authApi} from "../../api/authApi";

export const setAuthUserDataTC = () => (dispatch: Dispatch) => {
    authApi.getMe()
        .then(res => {
            const {id, email, login} = res.data.data
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(id, email, login))
            } else {
                dispatch(setMessagesLogInAC(res.data.messages))
            }
        })
}