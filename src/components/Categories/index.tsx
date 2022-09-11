import React from 'react';
import {useSelector} from "react-redux";
import classes from './Categories.module.scss'
import {useAppDispatch} from "../../redux/store";
import {selectFilterCategory} from "../../redux/Filter/selectors";
import {setCategory} from "../../redux/Filter/slice";

type CategoriesItems = {
    name: string,
    option: string
}

const Categories: React.FC = () => {

    const categories: CategoriesItems[] = [
        {name: 'Все', option: 'vse'},
        {name: 'Десерты', option: 'deserty'},
        {name: 'Салаты', option: 'salaty'},
        {name: 'ПП', option: 'pp'},
        {name: 'Мясо', option: 'myaso'}
    ];

    const category = useSelector(selectFilterCategory);
    const dispath = useAppDispatch();

    return (
        <div className={classes.container}>
            <ul>
                {categories.map(el =>
                    <li
                        key={el.option}
                        onClick={() => dispath(setCategory(el.option))}
                        className={category === el.option ? classes.active : null}
                    >
                        {el.name}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Categories;