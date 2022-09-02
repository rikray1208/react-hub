import React from 'react';
import img from "../../../assets/emoji/cloun.png";

const EmptyBlock = () => {
    return (
        <div className='flex flex-col gap-y-1 px-6 justify-center items-center h-[50vh] sm:h-[60vh]'>
            <img className='w-[140px] sm:w-[200px] object-contain' alt='ERROR' src={img}/>
            <h3 className='text-lightGrey text-sm max-w-[640px] mt-4 sm:text-xl'>К сожалению, поиск не дал результатов</h3>

        </div>
    );
};

export default EmptyBlock;