import axios from "axios";
import {ProfileUserType} from "../Types/types";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersApi = {
    getProfileUser(userID: number) {
        return instance.get<ProfileUserType>(`profile/${userID}`)
    }
}