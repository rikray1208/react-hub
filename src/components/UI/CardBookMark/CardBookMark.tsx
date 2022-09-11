import React from 'react';
import classes from '../../Card/Card.module.scss'

type CardBookProps = {
    onClick: () => void;
    isActive: boolean;
}

const CardBookMark: React.FC<CardBookProps> = ({onClick, isActive}) => {

    return (
        <svg
            className={isActive ? classes.bookMarkActive : classes.bookMark}
            onClick={onClick}
            width="21" height="33" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17.36 2.96617H3.64C3.29 2.96617 3 3.2529 3 3.59895V27.5952C3 27.8128 3.27 27.9314 3.43 27.7732L9.85 21.6135C10.22 21.2674 10.79 21.2674 11.16 21.6135L17.58 27.7732C17.74 27.9314 18.01 27.8128 18.01 27.5952V3.59895C18 3.2529 17.71 2.96617 17.36 2.96617ZM17.36 0C19.37 0 21 1.61162 21 3.59895V31.382C21 32.8058 19.26 33.5375 18.23 32.5388L10.5 25.1234L2.77 32.5388C1.73 33.5375 0 32.8058 0 31.382V3.59895C0 1.61162 1.63 0 3.64 0H17.36Z" fill="#E7C89D"/>
            {isActive &&
                <path d="M1.66999 2.63C-0.440007 22.879 0.189994 29.4639 1.86999 29.8199C3.72999 30.2252 7.06999 22.6912 9.64999 23.5019C10.95 23.9073 13.09 26.7548 13.76 28.3565C13.82 28.495 13.95 28.8311 14.28 29.019C15.27 29.5925 17.04 28.2676 17.35 28.0303C19.35 26.5373 19.73 22.8593 19.05 14.3365C18.47 7.12868 18.16 3.50007 16.72 2.17518C12.02 -2.12576 2.07999 2.44214 1.66999 2.63Z" fill="#E7C89D"/>
            }
        </svg>
    );
};

export default CardBookMark;