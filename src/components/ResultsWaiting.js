import React from 'react'
import { Link } from 'react-router-dom'

function ResultsWaiting() {
    return (
        <div className='results-waiting-page'>
            <Link to='/results'>
                <button>
                    Go to Results
                </button>
            </Link>
        </div>
    )
}

export default ResultsWaiting
