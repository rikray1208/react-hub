import React, {useContext, useState} from "react";

const SearchContext = React.createContext()

export const useSearchContext = () => {
    return useContext(SearchContext)
}

const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
       <SearchContext.Provider value={{searchValue, setSearchValue}}>
           {children}
       </SearchContext.Provider>
    )
}

export default SearchProvider;