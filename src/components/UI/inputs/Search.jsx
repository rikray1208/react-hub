import React from 'react';
import SearchSvg from "../svgImages/SearchSvg";
import {useSearchContext} from "../../../context/SearchContext";

const Search = () => {
    const {searchValue, setSearchValue} = useSearchContext();
    function changeInput(event) {
        setSearchValue(event.target.value)
    }

    return (
        <div className='flex gap-x-2 items-center border border-mySecondary rounded-2xl px-4  max-w-[170px] h-12 w-full lg:max-w-[240px]'>
            <SearchSvg/>
            <input
                onChange={(event) =>changeInput(event) }
                className='max-w-[178px] w-full text-myBlack text-sm outline-none placeholder:text-mySecondary lg:text-base'
                placeholder='Поиск рецетопв...'
                value={searchValue}
            />
        </div>
    );
};

export default Search;