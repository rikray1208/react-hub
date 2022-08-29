import React, {useState} from 'react';
import classes from "./Categories.module.scss";
import {useSortAndFilterContext} from "../../context/SortAndFilterContext";

const Categories = () => {
    const categories = ['Все','Десерты', 'Салаты', 'ПП', 'Мясо'];
    const {category, setCategory} = useSortAndFilterContext();
    console.log(category)

    return (
        <div className={classes.container}>
            <ul>
                {categories.map(el =>
                    <li key={el} onClick={() => setCategory(el)} className={category === el ? classes.active : null}>{el}</li>
                )}
            </ul>
        </div>
    );
};

export default Categories;