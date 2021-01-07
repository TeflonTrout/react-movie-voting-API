import React, { useContext, useState, useEffect } from 'react'
import { MovieListContext } from '../MovieListContext'
import { Link } from 'react-router-dom'
import axios from 'axios';

function VotingForm() {
    const [movieList, setMovieList] = useContext(MovieListContext);
    const [clientVote, setClientVote] = useState([])

    useEffect(() => {
        fetch('https://movie-voting-v1.ue.r.appspot.com/api')
            .then(res => res.json())
            .then(json => {
                setMovieList(json.data)
                
            })
            console.log(movieList)
    }, [])

    //UPDATE RATING TO INPUT VALUE
    const handleRatingChange = (e, id) => {
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

        axios.post('https://movie-voting-v1.ue.r.appspot.com/api', movieList
        )
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error.response);
        });
        
        // axios.post(api_url,
        //     movieList, {
        //     headers: {
        //         "Accept":"application/json",
        //         "Content-Type":"application/json",
        //     }
        // })
        // .then((response) => {
        //     console.log(response)
        // })
        // .catch((error) => {
        //     console.log(error.response);
        // });
        // console.log("You posted", (JSON.stringify(movieList)))
        console.log("Post Successful")
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
                                placeholder="0"
                                onChange={e => handleRatingChange(e, (movie.rating), (movie.id))}
                                autoComplete="new-password"
                        />
                </div>
               ))}
               <button className='vote-btn' type='submit'>SEND IT</button>
               <Link to='/voted' style={{ textDecoration: 'none' }}>
               </Link>
            </form> 
        </div>
    )
}

export default VotingForm
