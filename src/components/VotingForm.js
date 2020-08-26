import React, { useContext } from 'react'
import { MovieListContext } from '../MovieListContext'
import axios from 'axios';

function VotingForm() {
    const [movieList, setMovieList] = useContext(MovieListContext);

    //UPDATE RATING TO INPUT VALUE
    const handleRatingChange = (e, rating, id) => {
        setMovieList(movieList.map(movie => {
            if (movie.id === id) {
                return {...movie, rating: e.target.value}
            }
            return movie
        }))
        console.log(movieList)
    };

    const handleVotingSubmit = (e) => {
        e.preventDefault();
        axios.post('http://192.168.254.87:8080/api', {movieList});
        console.log('You Voted')
        console.log(movieList)
    }

    return (
        <div className='voting-form'>
            <form className='voting-form' onSubmit={e => handleVotingSubmit(e)}>
               {movieList.map(movie=> (
                    <div className='voting-item' key={movie.id}>
                        <h1>{movie.title}</h1>
                            <input className='check-box' type="checkbox"/>
                            <input type='number'
                                placeholder={movie.rating}
                                onChange={e => handleRatingChange(e, (movie.rating), (movie.id))}
                                autoComplete="new-password"
                            />
                </div>
               ))}
               <button className='vote-btn'>VOTE</button>
            </form> 
        </div>
    )
}

export default VotingForm
