export type IncrLikeCounterType = ReturnType<typeof incrLikeCounterAC>

export const incrLikeCounterAC = (id: string, likeCounter: number) => {
    return {
        type: 'INCR_LIKE_COUNTER',
        payload: {
            id,
            likeCounter
        }
    } as const
}