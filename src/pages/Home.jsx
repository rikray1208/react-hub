import React, {useEffect} from 'react';
import CardSkeleton from "../components/Card/CardSkeleton";
import Card from "../components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import useDebounce from "../hooks/useDebounce";
import {fetchRecipes} from "../redux/recipesSlice";
import {selectFilter} from "../redux/filterSlice";
import Errorblock from "../components/Errorblock/Errorblock";

const Home = () => {
    const { category, sortType, searchValue } = useSelector(selectFilter);
    const { data, status, error } = useSelector((state) => state.recipes);
    const delay = useDebounce(searchValue, 300);
    const dispath = useDispatch();


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

    if (status === 'error') {
        return <Errorblock error={error}/>
    }

    return (
        <>
            <div className='grid grid-cols-1 p-6 place-items-center gap-y-16 md:grid-cols-2 md:p-16 lg:grid-cols-3 xl:grid-cols-4'>
                {status === 'loading' &&
                    [...new Array(12)].map((el, i) =>
                        <CardSkeleton key={i}/>)
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