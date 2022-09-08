import React, {useEffect} from 'react';
import CardSkeleton from "../components/Card/CardSkeleton";
import Card from "../components/Card/Card";
import {useSelector} from "react-redux";
import useDebounce from "../hooks/useDebounce";
import ErrorBlock from "../components/UI/ErrorBlock/ErrorBlock";
import EmptyBlock from "../components/UI/EmptyBlock/EmptyBlock";
import {RootState, useAppDispatch} from "../redux/store";
import {selectFilter} from "../redux/Filter/selectors";
import {fetchRecipes} from "../redux/Recipes/asyncActions";


const Home: React.FC = () => {
    const { category, sortType, searchValue } = useSelector(selectFilter);
    const { data, status, error } = useSelector((state: RootState) => state.recipes);
    const delay = useDebounce(searchValue, 300);
    const dispath = useAppDispatch();

    useEffect(() => {
        dispath(
            fetchRecipes({
                sortBy: sortType.type,
                order: 'desc',
                filter: category === 'vse' ? '' : category,
                search: delay || ''
            })
        )
    }, [category, sortType, delay])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (status === 'error') {
        return <ErrorBlock error={'' + error}/>
    }

    return (
        <>
            {!data.length && status !== 'loading' &&
                <EmptyBlock/>
            }

            <div className='grid__container'>
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