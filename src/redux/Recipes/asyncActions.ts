import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {DataItems, FetchParams} from "./types";
import {recipesRequestUrl} from "../../utils/api";

export const fetchRecipes = createAsyncThunk<DataItems[], FetchParams>(
    'recipes/fetchRecipesStatus',
    async (params) => {
        const {sort, order, filterByCategory, search} = params;
        const data = await axios.get<DataItems[]>(recipesRequestUrl, {
            params: {
                category: filterByCategory,
                _sort: sort,
                _order: order,
                q: search
            }
        })
        return data.data
    }
)