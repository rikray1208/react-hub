import {configureStore} from "@reduxjs/toolkit";
import filter from "./Filter/slice"
import cart from "./Cart/slice"
import recipes from "./Recipes/slice"
import user from "./User/slice"
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        filter,
        cart,
        recipes,
        user
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
