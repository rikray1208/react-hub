import React from 'react';
import SearchSvg from "../svgImages/SearchSvg";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../../redux/filterSlice";

const Search = () => {
    const searchValue = useSelector((state) => state.filterSlice.searchValue);
    const dispath = useDispatch();

    return (
        <div className='flex gap-x-2 items-center border border-mySecondary rounded-2xl px-4  max-w-[170px] h-12 w-full lg:max-w-[240px]'>
            <SearchSvg/>
            <input
                onChange={(event) => dispath(setSearchValue(event.target.value))}
                className='max-w-[178px] w-full text-myBlack text-sm outline-none placeholder:text-mySecondary lg:text-base'
                placeholder='Поиск рецетопв...'
                value={searchValue}
            />
        </div>
    );
};

export default Search;