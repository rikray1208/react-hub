import React from 'react';
import classes from "./Categories.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../redux/filterSlice";

const Categories = () => {
    const categories = ['Все','Десерты', 'Салаты', 'ПП', 'Мясо'];

    const category = useSelector((state) => state.filterSlice.category);
    const dispath = useDispatch();

    console.log('render categories');

    return (
        <div className={classes.container}>
            <ul>
                {categories.map(el =>
                    <li key={el} onClick={() => dispath(setCategory(el))} className={category === el ? classes.active : null}>{el}</li>
                )}
            </ul>
        </div>
    );
};

export default Categories;