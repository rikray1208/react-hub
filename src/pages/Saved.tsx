import React from 'react';
import bad from '../assets/emoji/bad.png'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import arrow from '../assets/tick.svg'
import {ButtonLink, Card} from "../components";

const Saved = () => {
    const likedArray = useSelector((state: any) => state.cart.likedCards);

    return (
        <>
            {likedArray.length
                ?
                <>
                    <div className='px-16 pt-10 flex justify-between'>
                        <h1 className='text-3xl font-bold text-myBlack'>Мои закладки:</h1>
                        <Link to='/'>
                            <button className='rounded-[50px] bg-myGrey p-4 outline-none'>
                            <img src={arrow}/>
                            </button>
                        </Link>
                    </div>
                    <div className='grid grid-cols-1 p-6 place-items-center gap-y-16 md:grid-cols-2 md:p-16 lg:grid-cols-3 xl:grid-cols-4'>
                        {likedArray.map((el: any) =>
                            <Card key={el.id} {...el}/>
                        )}
                    </div>
                </>
                :
                <div className='flex flex-col gap-y-1 px-6 justify-center items-center h-[50vh]'>
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