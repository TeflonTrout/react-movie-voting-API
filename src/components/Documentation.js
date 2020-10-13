import React from 'react'
import {Link} from 'react-router-dom'

const Documentation = () => {
    return (
        <div className="documentation-page">
            <h1>Documentation</h1>
            <h5>**NOTE: THE APP WILL NOT WORK UNLESS THE API SERVER IS OPERATIONAL**</h5>
            <div className="doc-text">
                <ul>
                    <li>This web application was developed for personal use when deciding on a movie to watch with family and friends.</li>
                    <li>The "Edit List" button is to be used by the main display (either a projector or TV the film will be watched on).</li>
                    <li>Movies can be added or removed from the watchlist. Upon subission the movie list is sent to an API developed in Go.</li>
                    <li>The main display then selects the "Wait for Results" button while everybody else votes on which movie they would like to watch.</li>
                    <li>Each individual client will then select the "Vote" button on their mobile device.</li>
                    <li>The movie list is pulled from the API and the movies should be ranked with the movie you want to watch most recieving the highest ranking.</li>
                    <li>After each client sends their results to the API, the backend calculates the results and the main display should click "Pull the Votes".</li>
                    <li>The votes are then displayed using ChartJS in a simple to read graph.</li>
                </ul>
                <Link to='/'>
                <button>Go Back</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Documentation
