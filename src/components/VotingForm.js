import React, { useContext, useState, useEffect } from 'react'
import { MovieListContext } from '../MovieListContext'
import { Link, useHistory } from 'react-router-dom'
import Voted from './Voted'
import axios from 'axios';

function VotingForm() {
    const [movieList, setMovieList] = useContext(MovieListContext);
    const [clientVote, setClientVote] = useState([])
    let history = useHistory();

    useEffect(() => {
        fetch('http://192.168.254.81:3000/api')
            .then(res => res.json())
            .then(json => {
                setMovieList(json.data)
                
            })
            console.log(movieList)
    }, [])

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
        const api_url = "http://192.168.254.81:3000/api"
        
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
        console.log("Post Successful")
    }

    const buttonClick = (e) => {
        let path = `/voted`;
        history.push(path)
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
                   {/* <button className='vote-btn'>Go to Results</button> */}
            </form> 
        </div>
    )
}

export default VotingForm
