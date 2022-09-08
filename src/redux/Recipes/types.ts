export type DataItems = {
    id: number;
    title: string;
    category: string;
    categoryImg: string;
    imageUrl: string;
    cookingTime: number;
    calories: number;
}

export enum Status   {
    LOADING = 'loading',
    SUCCESS = 'fulfilled',
    ERROR = 'error'

}

export interface RecipesSliceState {
    status: Status;
    error: string | undefined;
    data: DataItems[];
}

export type FetchParams = {
    sortBy: string;
    order: string;
    filter: string;
    search: string;
}