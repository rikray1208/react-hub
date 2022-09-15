import React from 'react';

type BtnProps = {
    setActive?: any;
    children: JSX.Element | string;
}

const HeaderButton: React.FC<BtnProps> = ({setActive, children}) => {

    return (
        <div onClick={setActive} className='flex justify-center items-center rounded-2xl bg-myGrey min-w-[48px] h-12 text-mySecondary font-bold cursor-pointer hover:bg-myHoverGrey'>
            {children}
        </div>
    );
};

export default HeaderButton;