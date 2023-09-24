import {Dispatch} from "redux";
import axios from "axios";
import {setUsersAC} from "../setUsersAC";
import {setPagesAC} from "../setPagesAC";
import {RootStateType} from "../../store/store";

export const getUsersTC = () => (dispatch: Dispatch, getState: () => RootStateType) => {
    const currentPage = getState().usersPage.currentPage
    const pageSize = getState().usersPage.pageSize
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            dispatch(setUsersAC(response.data.items))
            dispatch(setPagesAC(response.data.totalCount))
        })
}