export type SetPagesACType = ReturnType<typeof setPagesAC>

export const setPagesAC = (totalUserCount: number) => {
    return {
        type: 'SET_PAGES',
        payload: {
            totalUserCount
        }
    } as const
}