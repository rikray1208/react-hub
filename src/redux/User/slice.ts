import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserSliceState} from "./types";

const initialState: UserSliceState = {
    user: {},
    isAuth: false
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },

        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        }
    }
})

export const {setIsAuth, setUser} = userSlice.actions


export default userSlice.reducer;