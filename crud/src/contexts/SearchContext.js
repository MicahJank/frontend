import React, { createContext, useState } from 'react';

export const SearchContext = createContext();
export const SearchContextProvider = props => {
    const [comments, setComments] = useState([]);
    const [author, setAuthor] = useState({});

    return (
        <SearchContext.Provider value={{comments, setComments, author, setAuthor}}>
            {props.children}
        </SearchContext.Provider>
    )
    
}