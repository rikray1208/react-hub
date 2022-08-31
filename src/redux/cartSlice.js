import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    likedCards: []
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            state.likedCards = [...state.likedCards, action.payload];
        },
        deleteRecipe: (state, action) => {
            state.likedCards = state.likedCards.filter(el => el.id !== action.payload)
        }

    }
})

export const {addRecipe, deleteRecipe} = cartSlice.actions


export default cartSlice;