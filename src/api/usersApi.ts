import axios from "axios";
import {ProfileUserType} from "../Types/types";

const settings = {
    withCredentials: true,
    "API-KEY": "9d6d2507-dd03-42c3-a678-bf198d9db789"
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    ...settings
})

export const usersApi = {
    getProfileUser(userID: number) {
        return instance.get<ProfileUserType>(`profile/${userID}`)
    }
}