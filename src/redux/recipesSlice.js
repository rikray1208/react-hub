import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import {recipesRequestUrl} from "../utils/api";

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipesStatus',
    async (params, thunkAPI) => {
        const {sortBy, order, filter, search} = params;
        const {rejectWithValue} = thunkAPI;
        const {data} = await axios.get(recipesRequestUrl, {
            params: {
                sortBy,
                order,
                filter,
                search
            }
        });

        return data
    }
    )

const initialState = {
    status: "",
    error: '',
    data: [],
};


const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {

    },

    extraReducers: {
        [fetchRecipes.pending]: (state, action) => {
          state.status = "loading";
          state.data = [];
        },

        [fetchRecipes.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
        },

        [fetchRecipes.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.error.message
        },
    }
})

export const {addRecipe, deleteRecipe} = recipesSlice.actions


export default recipesSlice;