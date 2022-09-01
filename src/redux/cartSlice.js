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

export const selectCart = (state) => state.cart.likedCards;
export const selectCartByID = (id) => (state) => state.cart.likedCards.find( el => el.id === id);

export const {addRecipe, deleteRecipe} = cartSlice.actions


export default cartSlice;