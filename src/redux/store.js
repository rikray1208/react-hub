import {configureStore} from "@reduxjs/toolkit";
import {filterSlice} from "./filterSlice";
import cartSlice from "./cartSlice";
import recipesSlice from "./recipesSlice";

export const store = configureStore({
    reducer: {
        filterSlice: filterSlice.reducer,
        cart: cartSlice.reducer,
        recipes: recipesSlice.reducer,

    },
})