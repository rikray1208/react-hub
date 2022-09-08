import {RootState} from "../store";

export const selectCart = (state: RootState) => state.cart.likedCards;
export const selectCartByID = (id: number) => (state: RootState) => state.cart.likedCards.find((el)=> el.id === id);