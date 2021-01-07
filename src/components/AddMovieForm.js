import React, {useState, useContext, useEffect} from 'react'
import {MovieListContext} from '../MovieListContext'
import axios from 'axios';

const AddMovieForm = () => {

    //SET STATE AND CONTEXT
    const [movieList, setMovieList] = useContext(MovieListContext)
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("0")
    const [results, setResults] = useState([])
    

    //UPDATED INPUT QUERY
    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    //ADDS NEW MOVIE TO MOVIELIST ARRAY
    const addMovie = (e) => {
        e.preventDefault();

        setMovieList(movieList => [...movieList, {id: (Date.now()), title: title, rating: rating}])
        setTitle('')
        console.log("added", title, "to the list")
        console.log(results)
    }

    //WHEN MOVIELIST IS UPDATED => CONSOLE LOG MOVIELIST
    useEffect(() => {
        console.log(movieList)
    }, [movieList])
    
    return (
        <div className="add-movie">
            <h1>ADD A MOVIE</h1>
            <form className='add-movie-form' onSubmit={addMovie}>
                <input required autoComplete="off" className='input-bar' type="text" name="title" onChange={updateTitle} value={title}/> 
                <button className='add-btn'><i className="fas fa-plus-circle"></i></button> 
            </form>
        </div>
    )
}

export default AddMovieForm
