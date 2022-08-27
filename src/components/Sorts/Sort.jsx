import React, {useEffect, useState} from 'react';
import sortIcon from "../../assets/sortIcon.png";

const Sort = () => {
    const [active, setActive] = useState(false);

    const sortsArr = ['По времени готовки', 'По калорийности', 'По сложности'];


    return (
        <div className='flex flex-wrap items-center relative'>
            <img className='w-fit h-fit mr-1.5' alt='#' src={sortIcon}/>
            <p className='text-lg font-bold '>
                Сортировка: <span className='text-mySecondary font-light underline cursor-pointer select-none' onClick={() => setActive(!active)}>По популяности</span>
            </p>
            {active && (
                <ul className='bg-myGrey px-6 py-4 rounded-2xl absolute top-12 right-[-2px]'>
                    {sortsArr.map(el =>
                        <li key={el} className='font-semibold text-base'>{el}</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Sort;