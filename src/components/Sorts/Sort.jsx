import React, {useState} from 'react';
import sortIcon from "../../assets/sortIcon.png";

const Sort = () => {
    const [active, setActive] = useState(false);
    const [currentSort, setCurrentSort] = useState('времени готовки')

    const sortsArr = ['времени готовки', 'калорийности', 'сложности'];
    function clickOnItem(name) {
        setActive(false);
        setCurrentSort(name);
    }



    return (
        <div tabIndex={1} onBlur={()=> setActive(false)} className='flex flex-wrap items-center relative outline-none'>
            <img className='w-fit h-fit mr-1.5' alt='#' src={sortIcon}/>
            <p className='text-sm font-bold md:text-lg'>
                Сортировка по: <span className='text-mySecondary font-light underline cursor-pointer select-none' onClick={() => setActive(!active)}>{currentSort}</span>
            </p>
            {active && (
                <ul className='flex flex-col bg-myGrey p-4 rounded-2xl absolute top-12 right-[-2px] z-10'>
                    {sortsArr.map(el =>
                        <li key={el} onClick={() => clickOnItem(el)} className='font-semibold text-base'>{el}</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Sort;