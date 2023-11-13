export type PostType = {
    id: string
    avatar: string
    message: string | null
    likeCount: number
}
export type MessageType = {
    message: string
}
export type DialogItemType = {
    id: string
    name: string
}
export type ProfileUserType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    },
    photos: {
        small: string
        large: string
    }
}

export type ProfileInitStateType = {
    posts: PostType[]
    userProfile: ProfileUserType | null
    status: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    },
    followed: boolean
    uniqueUrlName: string | null
}

export type DialogsInitStateType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
}
export type UsersInitStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
    messages: string[]
}