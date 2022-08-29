import React from 'react';
import bad from '../assets/emoji/bad.png'
import ButtonLink from "../components/UI/buttons/ButtonLink";
import {useFetch} from "../hooks/useFetch";
import axios from "axios";
import {recipesRequestUrl} from "../utils/api";
import Card from "../components/Card/Card";

const Saved = () => {
    const fakeDataArr = [];
    const [data, isLoading, error] = useFetch(() => {
        return axios.get(recipesRequestUrl);

    })

    return (
        <>
            {data.length
                ?
                <>
                    <h1 className='pl-16 pt-10 text-3xl font-bold text-myBlack'>Мои закладки:</h1>
                    <div className='cards__container'>
                        {data.map(el =>
                            <Card key={el.key} {...el}/>
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