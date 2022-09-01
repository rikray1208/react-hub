import React from 'react';
import bad from '../assets/emoji/bad.png'
import ButtonLink from "../components/UI/buttons/ButtonLink";
import Card from "../components/Card/Card";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

const Saved = () => {
    const likedArray = useSelector((state) => state.cart.likedCards);

    return (
        <>
            {likedArray.length
                ?
                <>
                    <h1 className='pl-16 pt-10 text-3xl font-bold text-myBlack'>Мои закладки:</h1>
                    <div className='grid grid-cols-1 p-6 place-items-center gap-y-16 md:grid-cols-2 md:p-16 lg:grid-cols-3 xl:grid-cols-4'>
                        {likedArray.map(el =>
                            <Card key={el.id} {...el}/>
                        )}
                    </div>
                </>
                :
                <div className='flex flex-col gap-2 justify-end items-center text-center mt-16 sm:mt-40'>
                    <h1 className='text-myBlack font-bold text-2xl sm:text-5xl'>У вас нет  закладок... </h1>
                    <p className='text-lightGrey text-xs max-w-[640px] sm:text-xl'>Чтоб добавить рецепт в закладки, перейдите на главную страницу и нажмите на иконку закладки над нужным рецептом</p>
                    <img className='w-[100px] my-4 sm:w-fit' alt={':('} src={bad}/>
                    <ButtonLink route='/'>Вернуться назад</ButtonLink>
                </div>
            }

        </>
    );
};

export default Saved;