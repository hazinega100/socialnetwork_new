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

export type InitStateType = {
    profilePage: {posts: PostType[]}
    dialogsPage: {
        dialogs: DialogItemType[]
        messages: MessageType[]
    }
}