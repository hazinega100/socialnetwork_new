import axios from "axios";

const settings = {
    withCredentials: true,
    "API-KEY": "9d6d2507-dd03-42c3-a678-bf198d9db789"
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    ...settings
})

export const authApi = {
    getMe() {
        return instance.get<AuthResponseType>('/auth/me')
    }
}

type AuthResponseType = {
    data: {id: number, email: string, login: string}
    messages: string[]
    fieldsErrors: string[],
    resultCode: number
}