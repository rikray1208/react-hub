import React from 'react';
import {Link} from "react-router-dom";

const ButtonLink = ({route, children}) => {
    return (
        <Link to={route}>
            <button className='bg-myBlack rounded-[30px] py-2 px-4 text-white font-bold text-sm outline-none transition-all active:scale-95 active:translate-y-1.5 sm:text-xl'>
                {children}
            </button>
        </Link>
    );
};

export default ButtonLink;