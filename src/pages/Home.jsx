import React, {useEffect} from 'react';
import CardSkeleton from "../components/Card/CardSkeleton";
import Card from "../components/Card/Card";
//import qs from 'qs';
//import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import useDebounce from "../hooks/useDebounce";
import {fetchRecipes} from "../redux/recipesSlice";
//import {setAllFilters} from "../redux/filterSlice";

const Home = () => {
    const { category, sortType, searchValue } = useSelector((state) => state.filterSlice);
    const { data, status, error } = useSelector((state) => state.recipes);
    const delay = useDebounce(searchValue, 500);
    const dispath = useDispatch();
    //const navigate = useNavigate();
    // useEffect(() => {
    //     const strParams = window.location.search;
    //
    //     if(strParams) {
    //         const objParams = qs.parse(strParams.substring(1));
    //         dispath(setAllFilters(objParams))
    //     }
    // }, [])

    // useEffect(() => {
    //     const queryStr = qs.stringify({
    //         filter: category,
    //         sortBy: sortType.type
    //     })
    //
    //     navigate(`?${queryStr}`);
    //
    // }, [category, sortType])

    useEffect(() => {
        dispath(
            fetchRecipes({
                sortBy: sortType.type,
                order: 'desc',
                filter: category === 'vse' ? '' : category,
                search: delay
            })
        )
    }, [category, sortType, delay])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='grid grid-cols-1 p-6 place-items-center gap-y-16 md:grid-cols-2 md:p-16 lg:grid-cols-3 xl:grid-cols-4'>
                {status === 'loading' &&
                    [...new Array(12)].map((el, i) =>
                        <CardSkeleton key={i}/>)
                }

                {status === 'error' &&
                    <h1 className='text-3xl text-red-600'>{error}!</h1>
                }

                {status === 'fulfilled' &&
                    data.map(el =>
                    <Card key={el.id} {...el}/>
                )}
            </div>
        </>
    );
};

export default Home;