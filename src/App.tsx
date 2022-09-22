import AppRouter from "./components/AppRouter";

import * as React from "react";
import {useLocation} from "react-router-dom";

import {Header, Categories, Sorts} from "./components";
import {useEffect, useState} from "react";
import {check} from "./https/userApi";
import {useAppDispatch} from "./redux/store";
import {setIsAuth, setUser} from "./redux/User/slice";

function App() {
    const [loading, setLoading] = useState<boolean>(true);
    const dispath = useAppDispatch();

    useEffect(() => {
        check()
            .then(response  => {
                dispath(setUser(response))
                dispath(setIsAuth(true))
            }).finally(() => {
                setLoading(false)
            })
    }, [])

    if(loading) {
        return <h1>loading....</h1>
    }

    return (
            <div className='wrapper'>
                <Header />
                <div className='sortAndFilter__container'>
                    <Categories/>
                    <Sorts/>
                </div>
                <AppRouter/>
            </div>
    );
}

export default App;
