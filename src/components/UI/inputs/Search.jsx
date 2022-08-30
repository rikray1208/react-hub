import React, {useRef} from 'react';
import SearchSvg from "../svgImages/SearchSvg";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../../redux/filterSlice";
import classes from "./Search.module.scss";
import closeIcon from '../../../assets/close.svg'

const Search = () => {
    const searchValue = useSelector((state) => state.filterSlice.searchValue);
    const dispath = useDispatch();
    const inputRef = useRef();

    function clearSearch() {
        dispath(setSearchValue(''));
        inputRef.current.focus()
    }

    return (
        <div className={classes.container}>
            <SearchSvg/>
            <input
                ref={inputRef}
                onChange={(event) => dispath(setSearchValue(event.target.value))}
                placeholder='Поиск рецетопв...'
                value={searchValue}
            />
            {searchValue ? <img className={classes.search_closeIcon} alt='close' src={closeIcon} onClick={() => clearSearch()}/> : ''}
        </div>
    );
};

export default Search;