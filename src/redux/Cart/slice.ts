import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartSliceState, likedCardsItems} from "./types";

const initialState: CartSliceState = {
    likedCards: []
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addRecipe: (state, action: PayloadAction<likedCardsItems>) => {
            state.likedCards = [...state.likedCards, action.payload];
        },
        deleteRecipe: (state, action: PayloadAction<number>) => {
            state.likedCards = state.likedCards.filter((el) => el.id !== action.payload)
        }
    }
})

export const {addRecipe, deleteRecipe} = cartSlice.actions


export default cartSlice.reducer;