import React, { useState, useEffect, useContext } from 'react';
import {MovieListContext} from "../MovieListContext";
import { Pie } from 'react-chartjs-2';


function Results() {
    const [movieList, setMovieList] = useContext(MovieListContext);
    const [testData, setTestData] = useState([{name: 'Movie 1', rating: 5}, {name: 'Movie 2', rating: 2}, {name: 'Movie 3', rating: 3}])
    const [chartData, setChartData] = useState();
    const [chartOptions, setChartOptions] = useState();
    
    const chart = () => {
        setChartData({
            labels: testData.map(movie => [movie.name]),
            datasets: [
                {
                    label: "RESULTS",
                    data: testData.map(movie => [movie.rating]),
                    backgroundColor: [
                        'red',
                        'blue',
                        'yellow'
                    ]
                }
            ],
            borderWidth: 1
        });
        setChartOptions({
            animation: {
                duration: 3000,
                easing: 'easeInBounce'
            }
        })
    }

    useEffect(() => {
        chart();
        
    }, [])

    return (
        <div className='results-screen'>
            <h1>AND THE WINNER IS...</h1>
            <Pie 
                data={ chartData }
                options= { chartOptions }
            />
        </div>
    )
}

export default Results
