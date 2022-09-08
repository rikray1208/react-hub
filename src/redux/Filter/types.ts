export type Sorts = {
    name: string;
    type:string;
}

export interface FilterSliceState  {
    category: string;
    sortType: Sorts;
    searchValue: string;
}