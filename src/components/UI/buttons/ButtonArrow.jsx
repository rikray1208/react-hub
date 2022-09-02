import React from 'react';
import arrow from "../../../assets/arrow.png";

const ButtonArrow = () => {
    return (
        <div className='absolute flex justify-center items-center bottom-4 right-4 bg-white w-[35px] h-[35px] rounded-[50px] transition-all shadow-btnShadow  active:scale-90 active:translate-x-0.5 active:translate-y-0.5'>
            <img alt='#' src={arrow}/>
        </div>
    );
};

export default ButtonArrow;