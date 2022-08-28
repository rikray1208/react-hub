import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sorts/Sort";
import CardSkeleton from "../components/Card/CardSkeleton";
import Card from "../components/Card/Card";
import {useFetch} from "../hooks/useFetch";
import axios from "axios";
import {recipesRequestUrl} from "../utils/api";;

const Home = () => {
    const [recipes, isLoading, error] = useFetch(() => {
        return axios.get(recipesRequestUrl);
    })

    useEffect(() => {
        console.log("dfsf")
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className='block max-w-[1340px] w-full min-h-[100vh] rounded-xl mx-auto bg-white shadow-Container'>
                <Header/>
                <div className='flex flex-wrap gap-4 justify-center px-6 py-10 border-b-2 border-b-myGrey flex md:px-16 md:justify-between'>
                    <Categories/>
                    <Sort/>
                </div>

                <div className='cards__container'>
                    {isLoading
                        ?
                        [...new Array(12)].map((el, i) =>
                            <CardSkeleton key={i}/>)
                        :
                        recipes.map(el =>
                            <Card key={el.id} {...el}/>
                        )
                    }
                </div>
            </div>
        </>
    );
};
//repeat(auto-fit, minmax(280px, 1fr))
//grid grid-cols-1 p-6 place-items-center gap-y-16 md:grid-cols-2 md:p-16 lg:grid-cols-3 xl:grid-cols-4
export default Home;