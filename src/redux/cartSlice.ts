import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "./store";

type likedCardsItems = {
    id: number;
    title: string;
    category: string;
    categoryImg: string;
    imageUrl: string;
    cookingTime: number;
    calories: number;
}

interface CartSliceState  {
    likedCards: likedCardsItems[];
}

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

export const selectCart = (state: RootState) => state.cart.likedCards;
export const selectCartByID = (id: number) => (state: RootState) => state.cart.likedCards.find((el)=> el.id === id);

export const {addRecipe, deleteRecipe} = cartSlice.actions


export default cartSlice;