import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie'
import {MovieListContext} from "../MovieListContext";

const MovieList = () => {
    const [movieList, setMovieList] = useContext(MovieListContext);

//Handle Form Submit => Post to API
    async function handleSubmit(e) {
        e.preventDefault();
        setMovieList(movieList);
        console.log(JSON.stringify(movieList));
        
//Fetch POST to API



       await fetch('http://192.168.254.87:3000/api', {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieList)
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response;
                console.log(response);
            } else {
                console.log('BIGLY ERROR', response.status)
            }
        }).catch(err => err);
        console.log('POSTED', movieList);
        }

    const handleRatingChange = (e, rating, id) => {
        setMovieList(movieList.map(movie => {
            if (movie.id === id) {
                return {...movie, rating: e.target.value}
            }
            return movie
        }))
        console.log(movieList)
    }


    //REMOVE MOVIE FROM ARRAY
    const handleRemoveMovie = (e, id) => {
        e.preventDefault();
       const newMovieList = movieList.filter((movie) => movie.id !== id);
        return setMovieList([...newMovieList])
    }


    return (
        <div className='movie-list'>
            <form onSubmit={handleSubmit}>
                <div className='pity-point'>
                    <p>Pity Point?</p>
                </div>
                {movieList.map(movie => (
                    <div className='movie-component' key={movie.id}>
                        <h1>{movie.title}</h1>
                        <input className='check-box' type="checkbox"/>
                        <input type='number'
                        placeholder={movie.rating}
                        onChange={e => handleRatingChange(e, (movie.rating), (movie.id))}
                        autoComplete="new-password"
                        />
                        <button onClick={e => handleRemoveMovie(e, (movie.id))}><i class="fas fa-trash-alt"></i></button>
                    </div>
                ))}
                <button className='submit-btn' type='submit'>LIGHTS, CAMERA, ACTION! <br></br> <i class="fas fa-ticket-alt"></i></button>
            </form>
        </div>
    )
}

export default MovieList;
