import React, {useState} from 'react';
import sortIcon from "../../assets/sortIcon.png";
import {useDispatch, useSelector} from "react-redux";
import {selectFilterSortType} from "../../redux/Filter/selectors";
import {setSortType} from "../../redux/Filter/slice";

type SortsItems = {
    name: string;
    type: string;
}


const Sort: React.FC = () => {
    const [active, setActive] = useState<boolean>(false);

    const sortsArr: SortsItems[] = [
        {name: 'времени готовки', type:'cookingTime'},
        {name: 'калорийности', type:'calories'},
        {name: 'популярности', type:'rating'},
        {name: 'названию', type:'title'}
    ];

    const sortName = useSelector(selectFilterSortType);
    const dispath = useDispatch();

    function clickOnItem(params: {name: string; type:string}) {
        const {name, type} = params;
        setActive(false);
        dispath(setSortType({name, type}));
    }

    return (
        <div tabIndex={1} onBlur={()=> setActive(false)} className='flex flex-wrap items-center relative outline-none'>
            <img className='w-fit h-fit mr-1.5' alt='#' src={sortIcon}/>
            <p className='text-sm font-bold md:text-lg'>
                Сортировка по: <span className='text-mySecondary font-light underline cursor-pointer select-none' onClick={() => setActive(!active)}>{sortName}</span>
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