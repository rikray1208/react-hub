import React, {useEffect} from 'react';
import CardSkeleton from "../components/Card/CardSkeleton";
import Card from "../components/Card/Card";
import {useFetch} from "../hooks/useFetch";
import axios from "axios";
import {recipesRequestUrl} from "../utils/api";
import {useSortAndFilterContext} from "../context/SortAndFilterContext";
import {useSearchContext} from "../context/SearchContext";

;

const Home = () => {
    const {category, sortType} = useSortAndFilterContext();
    const {searchValue} = useSearchContext();

    const [recipes, isLoading, error] = useFetch(() => {
        return axios.get(recipesRequestUrl, {
            params: {
                sortBy: sortType.type,
                order: 'desc',
                filter: category === 'Все' ? '' : category,
                search: searchValue
            }
        });
    }, category, sortType, searchValue)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (error) {
        return <h1>error</h1>
    }
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
//repeat(auto-fit, minmax(280px, 1fr))
//grid grid-cols-1 p-6 place-items-center gap-y-16 md:grid-cols-2 md:p-16 lg:grid-cols-3 xl:grid-cols-4
export default Home;