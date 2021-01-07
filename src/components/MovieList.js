import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {MovieListContext} from "../MovieListContext";
import axios from 'axios';

const MovieList = () => {
    const [movieList, setMovieList] = useContext(MovieListContext);

//Handle Form Submit => Post to API
    async function handleSubmit(e) {
        e.preventDefault();
        setMovieList(movieList);
        console.log(JSON.stringify("Posted",movieList));
        
    //Fetch POST to API
        axios.post('https://movie-voting-v1.ue.r.appspot.com/api',
        movieList
        )
        .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    console.log('BIGLY ERROR', response)
                }
            })
            .catch(err => err);
            console.log('POSTED', movieList)
    }

    // const handleRatingChange = (e, rating, id) => {
    //     setMovieList(movieList.map(movie => {
    //         if (movie.id === id) {
    //             return {...movie, rating: e.target.value}
    //         }
    //         return movie
    //     }))
    //     console.log(movieList)
    // }


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
                    {/* <p>Pity Point?</p> */}
                </div>
                {movieList.map(movie => (
                    <div className='movie-component' key={movie.id}>
                        <h1>{movie.title}</h1>
                        <button onClick={e => handleRemoveMovie(e, (movie.id))}><i class="fas fa-trash-alt"></i></button>
                    </div>
                ))}
                    <button className='submit-btn' type='submit'>SUBMIT MOVIES! <br></br> <i class="fas fa-ticket-alt"></i>
                    </button>
                <Link to='/results' style={{ textDecoration:'none' }}>
                    <button className="submit-btn">
                        WAIT FOR RESULTS
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default MovieList;
