import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'Все',
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
        setCategory: (state, action) => {
            state.category = action.payload;
        },

        setSortType : (state, action) => {
            state.sortType = action.payload;
        },

        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    },
})
export const { setCategory, setSortType, setSearchValue} = filterSlice.actions;

export default filterSlice;