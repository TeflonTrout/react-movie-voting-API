import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div className="landing-page">
            <h1>WELCOME!</h1>
                <Link to='/list'>
                <button>
                    Go to Vote
                </button>
                </Link>
                <Link to='/results-wait'>
                <button>
                    Wait for Results
                </button>
                </Link>
        </div>
    )
}

export default LandingPage
