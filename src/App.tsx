import AppRouter from "./components/AppRouter";

import * as React from "react";
import {useLocation} from "react-router-dom";

import {Header, Categories, Sorts} from "./components";

function App() {
    const { pathname } = useLocation()

    return (
            <div className='wrapper'>
                <Header />
                    {pathname !== '/saved' &&
                        <div className='sortAndFilter__container'>
                            <Categories/>
                            <Sorts/>
                        </div>
                    }
                <AppRouter/>
            </div>
    );
}

export default App;
