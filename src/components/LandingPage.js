import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div className="landing-page">
            <h1>WELCOME!</h1>
                <Link to='/list'>
                <button>
                    Projector Click Here
                </button>
                </Link>
                <Link to='/voting'>
                <button>
                    Click Here to Vote
                </button>
                </Link>
        </div>
    )
}

export default LandingPage
