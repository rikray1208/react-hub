import React from 'react';
import logo from "../../assets/headerImg/logo.png";
import BookMarkSvg from "../UI/svgImages/BookMarkSvg";
import ProfileSvg from "../UI/svgImages/ProfileSvg";
import HeaderButton from "../UI/buttons/HeaderButton";
import MyInput from "../UI/input/MyInput";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='flex flex-wrap gap-x-4 gap-y-4 justify-center  items-center border-b-2 border-b-myGrey py-6 px-6 sm:justify-between md:px-16'>
            <div className='flex items-center'>
                <img src={logo} alt='logo'/>
                <Link to='/'>
                    <div className='ml-1.5'>
                        <h3 className='text-lg font-bold uppercase text-myBlack lg:text-2xl'>recipes react hub</h3>
                        <p className='text-sm text-mySecondary font-medium lg:text-base'>Хаб рецептов</p>
                    </div>
                </Link>
            </div>
            <div className='flex gap-x-2 lg:gap-x-6'>
                <MyInput/>
                <HeaderButton>
                    <BookMarkSvg/>
                </HeaderButton>
                <Link to='/saved'>
                    <HeaderButton>
                        <ProfileSvg/>
                    </HeaderButton>
                </Link>
            </div>
        </header>
    );
};

export default Header;