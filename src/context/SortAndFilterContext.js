import React, {useContext, useState} from "react";

const SortAndFilterContext = React.createContext()

export const useSortAndFilterContext = () => {
    return useContext(SortAndFilterContext)
}

const SortAndFilterProvider = ({ children }) => {
    const [category, setCategory] = useState('Мясо');
    const [sortType, setSortType] = useState({name: 'популярности', type: 'rating'});

    return (
        <SortAndFilterContext.Provider value={{
            category, setCategory,
            sortType, setSortType
        }}>
            {children}
        </SortAndFilterContext.Provider>
    )
}

export default SortAndFilterProvider;