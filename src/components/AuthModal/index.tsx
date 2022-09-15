import React, {useState} from 'react';
import classes from './AuthModal.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {login, registration} from "../../https/userApi";
import {RootState, useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {setIsAuth, setUser} from "../../redux/User/slice";


type AuthProps = {
    closeModal: (value: boolean) => void;
}

const AuthModal: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    
    const [password, setPassword] = useState<string>('');
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
    
    const [passwordError, setPasswordError] = useState<string>('Пароль не может быть пустым');
    const [emailError, setEmailError] = useState<string>('Емейл не может быть пустым');
    
    let navigate = useNavigate();
    const { pathname } = useLocation();
    const isLogin = pathname === '/login';

    const dispath = useAppDispatch();
    const user = useSelector((state: RootState) => state.user);
    
    function blurHandler(event: any) {
        const name = event.target.name
        switch ( name ) {
            case 'email':
                console.log('setemai;')
                setEmailDirty(true);
                break;

            case 'psw' :
                setPasswordDirty(true)
                break;
        }
    }

    async function auntification(event: any) {
        event.preventDefault()

        try {
            let userData;

            if(isLogin) {
                userData = await login(email, password);
            } else {
                userData = await registration(email, password)
            }
            dispath(setUser(userData));
            dispath(setIsAuth(true));
            navigate('/')

        }catch (error: any) {

            alert(error.response.data.message)
        }
    }

    return (
        <div className={classes.modal}>
            <form className={classes.form}>
                <div className={classes.form__header}>
                    <h1 className={classes.form__title}>
                        {isLogin ? "Вход" : "Регестрация"}
                    </h1>
                </div>

                {emailDirty && <h3 className='font-bold text-red-600'>{emailError}</h3>}
                <div className={classes.form__inputWrapper}>
                    <input
                        onBlur={blurHandler}
                        className={classes.form__input}
                        type='text'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label className={classes.form__label}>Электронная почта</label>
                </div>

                {passwordDirty && <h3 className='font-bold text-red-600'>{passwordError}</h3>}
                <div className={classes.form__inputWrapper}>
                    <input
                        onBlur={blurHandler}
                        className={classes.form__input}
                        type='password'
                        name='psw'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label className={classes.form__label}>Пароль</label>
                </div>
                <button
                    onClick={auntification}
                    className={classes.form__btn}
                >
                    {isLogin ? 'войти' : 'зарегистрироваться'}
                </button>

                {isLogin ?
                    <p className={classes.form__isAuth}>Нет аккаунта?&nbsp;
                        <Link to='/registration'>
                            <span className={classes.form__link}>Зарегистрироваться</span>
                        </Link>
                    </p>
                    :
                    <p className={classes.form__isAuth}>Есть аккаунта?&nbsp;
                        <Link to='/login'>
                            <span className={classes.form__link}>Войти</span>
                        </Link>
                    </p>
                }
            </form>
        </div>
    );
};

export default AuthModal;