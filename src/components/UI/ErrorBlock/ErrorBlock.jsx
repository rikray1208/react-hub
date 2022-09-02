import React from 'react';
import img from '../../../assets/emoji/cloun.png'

const ErrorBlock = ({error}) => {

    return (
        <div className='flex flex-col gap-y-1 px-6 justify-center items-center h-[50vh] sm:h-[60vh]'>
            <span className='text-6xl text-red-600 text-center font-bold mb-2'>{parseInt(error.match(/\d+/))}</span>
            <h1 className='text-myBlack text-center font-bold text-2xl sm:text-4xl'>Упс! произошла ошибка</h1>
            <p className='text-lightGrey text-xs max-w-[640px] mb-4 sm:text-xl'>Попробуйте перезарузить сайт</p>
            <img className='w-[140px] sm:w-[200px] object-contain' alt='ERROR' src={img}/>
        </div>
    );
};

export default ErrorBlock;