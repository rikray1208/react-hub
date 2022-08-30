import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
        setCategory: (state, action) => {
            state.category = action.payload;
        },

        setSortType : (state, action) => {
            console.log(action.payload)
            state.sortType = action.payload;
        },

        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },

        setAllFilters: (state, action) => {
            //console.log(action.payload)
            //console.log(state.category)
            state.category = action.payload.filter;
            state.sortType.type = action.payload.sortBy;
        }
    },
})
export const { setCategory, setSortType, setSearchValue, setAllFilters} = filterSlice.actions;

export default filterSlice;