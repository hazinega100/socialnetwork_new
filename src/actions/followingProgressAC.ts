export type FollowingProgressACType = ReturnType<typeof followingProgressAC>

export const followingProgressAC = (userID: number, progress: boolean) => {
    return {
        type: 'FOLLOWING_PROGRESS',
        userID,
        progress
    } as const
}