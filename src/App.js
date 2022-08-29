import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sorts/Sort";
import React from "react";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className='wrapper'>
                    <Header/>
                    <div className='cards__container'>
                        <Categories/>
                        <Sort/>
                    </div>
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
