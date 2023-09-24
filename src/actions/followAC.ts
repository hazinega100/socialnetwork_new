export type FollowACType = ReturnType<typeof followAC>

export const followAC = (id: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            id
        }
    } as const
}