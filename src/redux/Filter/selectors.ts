import {RootState} from "../store";


export const selectFilter = (state: RootState) => state.filter;
export const selectFilterSearch = (state: RootState) => state.filter.searchValue;
export const selectFilterCategory = (state: RootState) => state.filter.category;
export const selectFilterSortType = (state: RootState) => state.filter.sortType.name;
