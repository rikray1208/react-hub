import React, {useState} from 'react';
import sortIcon from "../../assets/sortIcon.png";
import {useDispatch, useSelector} from "react-redux";
import {setSortType} from "../../redux/filterSlice";

const Sort = () => {
    const [active, setActive] = useState(false);

    const sortsArr = [{name: 'времени готовки', type:'cookingTime'}, {name: 'калорийности', type:'calories'}, {name: 'популярности', type:'rating'}, {name: 'названию', type:'title'}];

    const sortType = useSelector((state) => state.filterSlice.sortType);
    const dispath = useDispatch();

    function clickOnItem({name, type}) {
        setActive(false);
        dispath(setSortType({name, type}));
    }

    return (
        <div tabIndex={1} onBlur={()=> setActive(false)} className='flex flex-wrap items-center relative outline-none'>
            <img className='w-fit h-fit mr-1.5' alt='#' src={sortIcon}/>
            <p className='text-sm font-bold md:text-lg'>
                Сортировка по: <span className='text-mySecondary font-light underline cursor-pointer select-none' onClick={() => setActive(!active)}>{sortType.name}</span>
            </p>
            {active && (
                <ul className='flex flex-col bg-myGrey p-4 rounded-2xl absolute top-12 right-[-2px] z-10'>
                    {sortsArr.map(el =>
                        <li
                            key={el.type}
                            onClick={() => clickOnItem(el)}
                            className='font-semibold text-base'
                        >
                            {el.name}
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Sort;