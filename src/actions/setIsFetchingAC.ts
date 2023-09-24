export type SetIsFetchingACType = ReturnType<typeof setIsFetchingAC>

export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}