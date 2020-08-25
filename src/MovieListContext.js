import React, { useState, createContext } from 'react';

export const MovieListContext = createContext();

export const MovieListProvider = (props) => {
    const [movieList, setMovieList] = useState([
        {
            id: 0,
            title: "Alpha",
            rating: "10"
        },
        {
            id: 1,
            title: "Bravo",
            rating: "5"
        },
        {
            id: 2,
            title: "Charlie",
            rating: "7"
        }
    ]);

    return (
        <MovieListContext.Provider value={[movieList, setMovieList]}>
            {props.children}
        </MovieListContext.Provider>
    )
}
