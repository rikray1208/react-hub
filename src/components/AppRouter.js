import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../pages/Home";

const Saved = React.lazy(() => import("../pages/Saved"));
const RecipePage = React.lazy(() => import("../pages/RecipePage"));


const appRouter = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipe/:id" element={<RecipePage/>}/>
                <Route path="/saved" element={<Saved/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Suspense>
    )
}

export default appRouter;