import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

const Saved = React.lazy(() => import("../pages/Saved"));
const RecipePage = React.lazy(() => import("../pages/RecipePage"));


const AppRouter: React.FC = () => {
    const {isAuth} = useSelector((state: RootState) => state.user);

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                {isAuth &&
                    [
                        <Route path="/saved" element={<Saved/>}/>,
                        <Route path="/admin" element={<Admin/>}/>
                    ]
                }

                <Route path="/" element={<Home/>}/>
                <Route path="/recipe/:id" element={<RecipePage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>

                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Suspense>
    )
}

export default AppRouter;