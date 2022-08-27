import React from 'react';

const HeaderButton = ({children}) => {
    return (
        <div className='flex justify-center items-center rounded-2xl bg-myGrey w-[48px] h-12 hover:bg-myHoverGrey'>
            {children}
        </div>
    );
};

export default HeaderButton;