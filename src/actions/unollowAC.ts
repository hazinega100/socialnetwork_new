export type UnfollowACType = ReturnType<typeof unfollowAC>

export const unfollowAC = (id: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id
        }
    } as const
}