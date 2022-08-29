import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sorts/Sort";
import React from "react";
import SortAndFilterProvider from "./context/SortAndFilterContext";
import SearchProvider from "./context/SearchContext";

function App() {
    return (
        <SearchProvider>
            <SortAndFilterProvider>
                <BrowserRouter>
                    <div className='block max-w-[1340px] w-full min-h-[100vh] rounded-xl mx-auto bg-white shadow-Container'>
                        <Header/>
                        <div className='flex flex-wrap gap-4 justify-center px-6 py-10 border-b-2 border-b-myGrey flex md:px-16 md:justify-between'>
                            <Categories/>
                            <Sort/>
                        </div>
                        <AppRouter/>
                    </div>
                </BrowserRouter>
            </SortAndFilterProvider>
        </SearchProvider>
    );
}

export default App;
