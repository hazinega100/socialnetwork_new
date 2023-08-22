export type AddPostType = ReturnType<typeof addPostAC>

export const addPostAC = (avatar: string, message: string) => {
    return {
        type: 'ADD_POST',
        payload: {
            avatar,
            message
        }
    } as const
}