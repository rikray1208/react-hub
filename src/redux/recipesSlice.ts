import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import {recipesRequestUrl} from "../utils/api";

export const fetchRecipes = createAsyncThunk<DataItems[], Record<string, string>>(
    'recipes/fetchRecipesStatus',
    async (params) => {
        const {sortBy, order, filter, search} = params;
        const data = await axios.get<DataItems[]>(recipesRequestUrl, {
            params: {
                sortBy,
                order,
                filter,
                search
            }
        })
        return data.data
    }
    )

type DataItems = {
    id: number;
    title: string;
    category: string;
    categoryImg: string;
    imageUrl: string;
    cookingTime: number;
    calories: number;
}

enum Status   {
    LOADING = 'loading',
    SUCCESS = 'fulfilled',
    ERROR = 'error'

}

interface RecipesSliceState {
    status: Status;
    error: string | undefined;
    data: DataItems[];
}

const initialState: RecipesSliceState = {
    status: Status.LOADING,
    error: '',
    data: [],
};


const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.pending, (state) => {
            state.status = Status.LOADING;
            state.data = [];
        })
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.data = action.payload;
        })
        builder.addCase(fetchRecipes.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.error = action.error.message
        })
    },

})

export default recipesSlice;