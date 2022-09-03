import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "./store";



type Sorts = {
    name: string;
    type:string;
}

interface FilterSliceState  {
    category: string;
    sortType: Sorts;
    searchValue: string;
}


const initialState: FilterSliceState = {
    category: 'vse',
    sortType: {
        name: 'популярности',
        type: 'rating'
    },
    searchValue: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },

        setSortType : (state, action: PayloadAction<Sorts>) => {
            state.sortType = action.payload;
        },

        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        }
    },
})

export const selectFilter = (state: RootState) => state.filterSlice

export const { setCategory, setSortType, setSearchValue} = filterSlice.actions;

export default filterSlice;