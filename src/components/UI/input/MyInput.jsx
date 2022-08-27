import React from 'react';
import SearchSvg from "../svgImages/SearchSvg";

const MyInput = () => {
    return (
        <div className='flex gap-x-2 items-center border border-mySecondary rounded-2xl px-4  max-w-[170px] h-12 w-full lg:max-w-[240px]'>
            <SearchSvg/>
            <input
                className='max-w-[178px] w-full text-myBlack text-sm outline-none placeholder:text-mySecondary lg:text-base'
                placeholder='Поиск рецетопв...'/>
        </div>
    );
};

export default MyInput;