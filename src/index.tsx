import * as React from 'react'
import * as ReactDOM from 'react-dom/client';
import './styles/index.scss';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')  as HTMLElement );

root.render(
 <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
            <App/>
            </BrowserRouter>
        </Provider>
 </React.StrictMode>
);
