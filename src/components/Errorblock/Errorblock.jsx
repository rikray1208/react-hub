import React from 'react';
import img from '../../assets/emoji/cloun.png'

const Errorblock = ({error}) => {
    return (
        <div className='flex flex-col gap-y-2 justify-center items-center h-[65vh]'>
            <span className='text-6xl text-red-600 font-semibold mb-4'>{error}</span>
            <h1 className='text-myBlack font-bold text-2xl sm:text-5xl'>Упс!  произошла ошибка</h1>
            <p className='text-lightGrey text-xs max-w-[640px] mb-4 sm:text-xl'>Попробуйте перезарузить сайт</p>
            <img className='w-fit' alt='ERROR' src={img}/>
        </div>
    );
};

export default Errorblock;