import React, {useState, useContext} from 'react'
import {MovieListContext} from '../MovieListContext'

const AddMovieForm = () => {
    const [movieList, setMovieList] = useContext(MovieListContext)
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("0")
    const [id, setId] = useState()
    


    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    const addMovie = (e) => {
        e.preventDefault();
        setMovieList(movieList => [...movieList, {id: (Date.now()), title: title, rating: rating}])
       console.log("movieAdded")
       setTitle('')
    }
    return (
        <div className="add-movie">
            <h1>ADD A MOVIE</h1>
            <form className='add-movie-form' onSubmit={addMovie}>
                <input required autoComplete="off" className='input-bar' type="text" name="title" onChange={updateTitle} value={title}/> 
                <button className='add-btn'><i class="fas fa-plus-circle"></i></button> 
            </form>
        </div>
    )
}

export default AddMovieForm
