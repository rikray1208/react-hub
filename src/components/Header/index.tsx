import React, {useEffect, useRef, useState} from 'react';
import logo from "../../assets/headerImg/logo1.png";
import bookMark from '../../assets/headerImg/bookmark.svg'
import ProfileSvg from '../../assets/headerImg/profile.svg'
import {Link} from "react-router-dom";
import {HeaderButton, Search} from "../index";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";
import {setIsAuth, setUser} from "../../redux/User/slice";



const Header: React.FC = () => {
    const { isAuth } = useSelector((state: RootState) => state.user)
    const dispath = useAppDispatch();

    const [active, setActive] = useState<boolean>(false);
    const listRef = useRef<HTMLUListElement>(null);

    function logOut() {
        localStorage.removeItem('token');
        dispath(setUser({}));
        dispath(setIsAuth(false));
        setActive(false)
    }

    return (
        <header className='flex flex-wrap gap-x-4 gap-y-4 items-center border-b-2 border-b-myGrey py-6 px-6 sm:justify-between md:px-16'>
            <div className='flex items-center'>
                <img src={logo} alt='logo'/>
                <Link to='/'>
                    <div className='ml-1.5'>
                        <h3 className='text-lg font-bold uppercase text-myBlack lg:text-2xl'>recipes react hub</h3>
                        <p className='text-sm text-mySecondary font-medium lg:text-base'>Хаб рецептов</p>
                    </div>
                </Link>
            </div>
            <div className='relative flex gap-x-2 lg:gap-x-6'>
                <Search/>

                <Link to='/saved'>
                    <HeaderButton>
                        <img src={bookMark} alt='bookmark'/>
                    </HeaderButton>
                </Link>


                {isAuth ?
                    <HeaderButton setActive={() => setActive(!active)}>
                        <img src={ProfileSvg} alt='profile'/>
                    </HeaderButton>
                    :
                    <Link to='/login'>
                        <HeaderButton>
                            <p className='px-4'>Войти</p>
                        </HeaderButton>
                    </Link>
                }

                {active &&
                    <ul
                        ref={listRef}
                        tabIndex={0}
                        onBlur={() => setActive(false)}
                        className='flex-col absolute z-10 shadow-xl right-[-3px] top-14 rounded-2xl py-2 overflow-hidden bg-myGrey outline-none'
                    >
                        <li
                            className='rounded-none w-full text-myBlack text-sm font-bold hover:bg-myHoverGrey'
                        >
                            Профиль
                        </li>
                        <li
                            onClick={logOut}
                            className='rounded-none w-full text-myBlack text-sm font-bold hover:bg-myHoverGrey'
                        >
                            Выйти
                        </li>
                    </ul>

                }
            </div>

        </header>
    );
};

export default Header;