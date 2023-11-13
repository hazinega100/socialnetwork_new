import axios from "axios";
import {ProfileUserType, UserType} from "../Types/types";

const settings = {
    withCredentials: true,
    "API-KEY": "9d6d2507-dd03-42c3-a678-bf198d9db789"
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    ...settings
})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
    },
    getProfileUser(userID: number) {
        return instance.get<ProfileUserType>(`profile/${userID}`)
    },
    getUserStatus(userID: number) {
        return instance.get<string>(`/profile/status/${userID}`)
    },
    changeStatus(status: string) {
        return instance.put<ChangeStatusType>(`/profile/status`, { status: status })
    },
    followUser(userID: number) {
        return instance.post<FollowResponseType>(`follow/${userID}`, {})
    },
    unfollowUser(userID: number) {
        return instance.delete<FollowResponseType>(`follow/${userID}`)
    }
}

type GetUsersResponseType = {
    items: UserType[]
    error: string | null
    totalCount: number
}

type ChangeStatusType = {
    resultCode: number
    messages: string[]
    data: {}
}

type FollowResponseType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}