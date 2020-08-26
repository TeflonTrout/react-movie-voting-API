import React, {useState, useContext, useEffect} from 'react'
import {MovieListContext} from '../MovieListContext'
import axios from 'axios';

const AddMovieForm = () => {
    //API KEY FOR THEMOVIEDB.COM
     const API_KEY = '08bd865f79a8f129e927b69c5220d722';

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

        // axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${title}`)
        //     .then((response) => {
        //         console.log(response.data);
        //         console.log(response.data.results);
        //         setResults(response.data.results[0])
        //     });


        setMovieList(movieList => [...movieList, {id: (Date.now()), title: title, rating: rating}])
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
                <button className='add-btn'><i class="fas fa-plus-circle"></i></button> 
            </form>
        </div>
    )
}

export default AddMovieForm
