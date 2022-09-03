import { Routes, Route, Navigate } from 'react-router-dom';
import RecipePage from "../pages/RecipePage";
import Saved from "../pages/Saved";
import Home from "../pages/Home";

const appRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/recipe/:id" element={<RecipePage/>}/>
            <Route path="/saved" element={<Saved/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}

export default appRouter;