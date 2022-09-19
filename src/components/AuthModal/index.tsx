import React, {MouseEvent} from 'react';
import classes from './AuthModal.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {login, registration} from "../../https/userApi";
import {useAppDispatch} from "../../redux/store";
import {setIsAuth, setUser} from "../../redux/User/slice";
import useInput from "../../hooks/useInput";
import errorSvg from "../../assets/erorrIcon1.svg"

const AuthModal: React.FC = () => {
    const email = useInput('', {isEmail: true});
    const password = useInput('', {isEmpty: true, isLatin: true, containNumber: true, minLength: 3});

    let navigate = useNavigate();
    const { pathname } = useLocation();
    const isLogin = pathname === '/login';

    const dispath = useAppDispatch();

    async function authentication(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        try {
            let userData;

            if(isLogin) {
                userData = await login(email.value, password.value);
            } else {
                userData = await registration(email.value, password.value)
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
                <div className={classes.form__inputWrapper}>
                    <input
                        onBlur={email.onBlur}
                        className={classes.form__input}
                        type='text'
                        name='email'
                        value={email.value}
                        onChange={email.onChange}
                        required
                    />
                    <label className={classes.form__label}>Электронная почта</label>

                    {email.arrErrors.map((el) =>
                        (el && email.isDirty) &&
                        <div key={el} className={classes.errorWrapper}>
                            <img className='w-fit h-fit' alt='error' src={errorSvg}/>
                            <h3 className={classes.errorWrapper__text}>{el}</h3>
                        </div>
                    )}
                </div>
                <div className={classes.form__inputWrapper}>
                    <input
                        onBlur={password.onBlur}
                        className={classes.form__input}
                        type='password'
                        name='psw'
                        value={password.value}
                        onChange={password.onChange}
                        required
                    />
                    <label className={classes.form__label}>Пароль</label>
                    {password.arrErrors.map((el ) =>
                        (el && password.isDirty) &&
                            <div key={el} className={classes.errorWrapper}>
                                <img className='w-fit h-fit' alt='error' src={errorSvg}/>
                                <h3 className={classes.errorWrapper__text}>{el}</h3>
                            </div>
                    )}
                </div>
                <button
                    disabled={!email.isValid || !password.isValid}
                    onClick={authentication}
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
                    <p className={classes.form__isAuth}>Есть аккаунт?&nbsp;
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