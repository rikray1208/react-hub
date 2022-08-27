import React from 'react';

const Categories = () => {

    const categories = ['Все','Десерты', 'Салаты', 'ПП', 'Мясо']
    return (
        <div className='max-w-[510px] w-max overflow-auto'>
            <ul className='flex gap-x-3'>
                {categories.map(el =>
                    <li className='block text-base font-bold px-6 py-2 text-white bg-myOrange rounded-[30px]'>{el}</li>
                )}
            </ul>
        </div>
    );
};

export default Categories;