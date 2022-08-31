import React from 'react';
import arrow from "../../../assets/arrow.png";

const ButtonArrow = () => {
    return (
        <div className='absolute flex justify-center items-center bottom-4 right-4 bg-white w-[30px] h-[30px] rounded-[50px] shadow-btnShadow'>
            <img alt='#' src={arrow}/>
        </div>
    );
};

export default ButtonArrow;