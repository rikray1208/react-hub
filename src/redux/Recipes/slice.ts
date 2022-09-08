import { createSlice } from '@reduxjs/toolkit';
import {RecipesSliceState, Status} from "./types";
import {fetchRecipes} from "./asyncActions";

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

export default recipesSlice.reducer;