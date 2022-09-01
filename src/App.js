import {useNavigate} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sorts/Sort";
import React from "react";
import {useLocation} from "react-router-dom";

function App() {
    const { pathname } = useLocation()

    return (
            <div className='wrapper'>
                <Header/>
                    {pathname !== '/saved' &&
                        <div className='cards__container'>
                            <Categories/>
                            <Sort/>
                        </div>
                    }
                <AppRouter/>
            </div>
    );
}

export default App;
