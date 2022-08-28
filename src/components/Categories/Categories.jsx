import React, {useState} from 'react';
import classes from "./Categories.module.scss";

const Categories = () => {
    const categories = ['Все','Десерты', 'Салаты', 'ПП', 'Мясо']
    const [isActive, setIsActive] = useState('Все');

    return (
        <div className={classes.container}>
            <ul>
                {categories.map(el =>
                    <li key={el} onClick={() => setIsActive(el)} className={isActive === el ? classes.active : null}>{el}</li>
                )}
            </ul>
        </div>
    );
};

export default Categories;