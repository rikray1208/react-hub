import React from 'react';
import meat from "../../assets/cardImg/meat.png";
import calories from "../../assets/cardImg/calories.png";
import time from "../../assets/cardImg/time.png";

const Card = () => {
    return (
        <div className='max-w-[255px] h-[300px] rounded-2xl bg-white shadow-cardShadow flex flex-col'>
            <h1 className='flex justify-center items-center w-full h-full text-2xl text-myBlack font-bold'>Даллас-стейк</h1>
            <div className='flex mt-auto px-3'>
                <div className='mr-auto flex items-center'>
                    <img className='h-[22px] w-[22px]' alt='img' src={meat}/>
                    <p className='text-sm font-bold ml-1.5'>Мясо</p>
                </div>
                <div className='flex mr-3 items-center'>
                    <img className='h-[18px] w-[18px] mr-1.5' alt='img' src={calories}/>
                    <p className='text-mySideText text-xs font-medium'>841 кл</p>
                </div>
                <div className='flex items-center'>
                    <img className='h-[18px] w-[18px] mr-1.5' alt='img' src={time}/>
                    <p className='text-mySideText text-xs font-medium'>120 м.</p>
                </div>
            </div>
            <div className='block mt-2'>
                <img className='w-full h-[172px] rounded-xl object-cover' alt='food' src='https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
        </div>
    );
};

export default Card;