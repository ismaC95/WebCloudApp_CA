import { createContext, useContext, useState } from 'react';

//Search context will store the input from user and will make it available through different pages (home and courseList)
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <SearchContext.Provider value={{ searchKeyword, setSearchKeyword, errorMessage, setErrorMessage }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);