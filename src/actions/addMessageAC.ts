export type AddMessageType = ReturnType<typeof addMessageAC>

export const addMessageAC = (message: string) => {
    return {
        type: 'ADD_MESSAGE',
        payload: {
            message
        }
    } as const
}