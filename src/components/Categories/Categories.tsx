import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, setCategory} from "../../redux/filterSlice";
import classes from './Categories.module.scss'

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

    const {category} = useSelector(selectFilter);
    const dispath = useDispatch();

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