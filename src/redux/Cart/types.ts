export type likedCardsItems = {
    id: number;
    title: string;
    category: string;
    categoryImg: string;
    imageUrl: string;
    cookingTime: number;
    calories: number;
}

export interface CartSliceState  {
    likedCards: likedCardsItems[];
}