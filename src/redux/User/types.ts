export interface UserSliceState {
    user: {
        id?: number,
        email?: string,
        password?: string
    },
    isAuth: boolean
}