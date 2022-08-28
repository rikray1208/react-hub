import React from 'react';
import caloriesImg from "../../assets/cardImg/calories.png";
import time from "../../assets/cardImg/time.png";
import arrow from '../../assets/arrow.png'
import {Link} from "react-router-dom";

const Card = (props) => {
    const {title, category, categoryImg, imageUrl, cookingTime, calories} = props;

    return (
        <div className='relative max-w-[255px] h-[300px] rounded-2xl bg-white shadow-cardShadow flex flex-col'>
            <h1 className='flex justify-center items-center w-full h-full text-2xl text-myBlack font-bold text-center'>{title}</h1>
            <div className='flex mt-auto px-3'>
                <div className='mr-auto flex items-center'>
                    <img className='h-[26px] w-[26px]' alt='img' src={categoryImg}/>
                    <p className='text-sm font-bold ml-1.5'>{category}</p>
                </div>
                <div className='flex mr-3 items-center'>
                    <img className='h-[18px] w-[18px] mr-1.5' alt='img' src={caloriesImg}/>
                    <p className='text-mySideText text-xs font-medium'>{calories} кл</p>
                </div>
                <div className='flex items-center'>
                    <img className='h-[18px] w-[18px] mr-1.5' alt='img' src={time}/>
                    <p className='text-mySideText text-xs font-medium'>{cookingTime} м.</p>
                </div>
            </div>
            <div className='block mt-2'>
                <img className='w-full h-[172px] rounded-xl object-cover' alt='food' src={imageUrl} />
            </div>
            <Link to={`/recipe/${title}`}>
                <div className='absolute flex justify-center items-center bottom-4 right-4 bg-white w-[30px] h-[30px] rounded-[50px] shadow-btnShadow'>
                    <img alt='#' src={arrow}/>
                </div>
            </Link>

        </div>
    );
};
//<Link to="/recipe/1">Link</Link>
export default Card;