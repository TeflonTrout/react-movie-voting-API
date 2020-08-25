import React, {useContext, setState} from 'react'
import { MovieListContext } from '../MovieListContext'

const Movie = ({ name, ranking, id }) => {
    const [movieList, setMovieList] = useContext(MovieListContext);


    return (
        <div key={id}>
            <h1 value={name}>{id} {name}</h1>
            <input type="text"  placeholder={ranking}/>
        </div>
    )
}

export default Movie
