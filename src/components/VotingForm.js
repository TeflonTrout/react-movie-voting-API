import React, { useContext, useState } from 'react'
import { MovieListContext } from '../MovieListContext'
import { Link } from 'react-router-dom'
import axios from 'axios';

function VotingForm() {
    const [movieList, setMovieList] = useContext(MovieListContext);
    const [clientVote, setClientVote] = useState([])

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
    //FORM SUBMIT FUNCTION
    const handleVotingSubmit = (e) => {
        e.preventDefault();
        setClientVote((JSON.stringify(movieList)));

    //API POST 
        const api_url = "http://192.168.254.77:3000/api"
        
        const headers = {
            'Host': "192.168.254.81:3000/api",
            'Content-Type': 'application/json',
            'Content-Length': 'Buffer.byteLength(movieList)'
        }

        const data = (JSON.stringify(movieList));
        
        
        axios.post(api_url,
            movieList, {
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json",
            }
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error.response);
        });
        console.log("You posted", (JSON.stringify(movieList)))

        // fetch('http://192.168.254.81:3000/api', {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(movieList)
        // }).then(response => {
        //     if (response.status >= 200 && response.status < 300) {
        //         return response;
        //         console.log(response);
        //     } else {
        //         console.log('BIGLY ERROR', response)
        //     }
        // }).catch(err => err);
        // console.log('POSTED', movieList);
    }

    return (
        <div className='voting-form'>
            <form className='voting-form' onSubmit={e => handleVotingSubmit(e)}>
            <h1>TIME TO VOTE</h1>
               {movieList.map(movie=> (
                    <div className='voting-item' key={movie.id}>
                        <h1>{movie.title}</h1>
                            {/* <input className='check-box' type="checkbox"/> */}
                        <input type='number'
                                placeholder={movie.rating}
                                onChange={e => handleRatingChange(e, (movie.rating), (movie.id))}
                                autoComplete="new-password"
                        />
                </div>
               ))}
               {/* <Link to='/results' style={{ textDecoration: 'none' }}> */}
               <button className='vote-btn'>SEND IT</button>
               {/* </Link> */}
            </form> 
        </div>
    )
}

export default VotingForm
