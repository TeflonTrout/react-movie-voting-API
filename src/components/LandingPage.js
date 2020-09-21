import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div className="landing-page">
            <h1>Movie Voting App</h1>
                <Link to='/list'>
                <button>
                    Edit List
                </button>
                </Link>
                <Link to='/voting'>
                <button>
                    Vote
                </button>
                </Link>
        </div>
    )
}

export default LandingPage
