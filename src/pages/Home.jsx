import React, {useEffect, useMemo, useRef} from 'react';
import CardSkeleton from "../components/Card/CardSkeleton";
import Card from "../components/Card/Card";
import {useFetch} from "../hooks/useFetch";
import axios from "axios";
//import qs from 'qs';
//import { useNavigate } from 'react-router-dom'
import {recipesRequestUrl} from "../utils/api";
import {useDispatch, useSelector} from "react-redux";
import useDebounce from "../hooks/useDebounce";
//import {setAllFilters} from "../redux/filterSlice";

const Home = () => {
    const {category, sortType, searchValue} = useSelector((state) => state.filterSlice);
    // const dispath = useDispatch();
    // const navigate = useNavigate();
    const delay = useDebounce(searchValue, 500);
    const [recipes, isLoading, error] = useFetch(() => {
            return axios.get(recipesRequestUrl, {
                params: {
                    sortBy: sortType.type,
                    order: 'desc',
                    filter: category === 'vse' ? '' : category,
                    search: delay
                }
            });

    }, category, sortType, delay)

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
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='grid grid-cols-1 p-6 place-items-center gap-y-16 md:grid-cols-2 md:p-16 lg:grid-cols-3 xl:grid-cols-4'>
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
        </>
    );
};

export default Home;