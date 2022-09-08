import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {DataItems, FetchParams} from "./types";
import {recipesRequestUrl} from "../../utils/api";

export const fetchRecipes = createAsyncThunk<DataItems[], FetchParams>(
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