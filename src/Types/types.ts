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
    aboutMe: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | undefined
        youtube: string | null
        mainLink: string | null
    },
    photos: {
        small: string | null
        large: string | null
    }
}

export type ProfileInitStateType = {
    posts: PostType[]
    userProfile: ProfileUserType | null
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
}