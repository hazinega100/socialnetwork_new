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

export type PostsInitStateType = {
    profilePage: {
        posts: PostType[]
    }
}
export type DialogsInitStateType = {
    dialogsPage: {
        dialogs: DialogItemType[]
        messages: MessageType[]
    }
}