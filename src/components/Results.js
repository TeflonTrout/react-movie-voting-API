import React, { useState, useEffect, useContext } from 'react';
import {MovieListContext} from "../MovieListContext";
import { Pie } from 'react-chartjs-2';
import Axios from 'axios';


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
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                duration: 3000,
                easing: 'easeInBounce'
            },
            layout: {
                padding: 25
            },
            legend: {
                labels: {
                    fontColor: 'black',
                    fontSize: 25
                }
            }
        })
    }

    useEffect(() => {
        axios.get("http://192.168.254.77:3000/api",
            movieList, {
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json",
            }
        })
        .then(res => res.json())
        .then(setTestData(res),
            console.log(res)
        )
        .catch((error) => {
            console.log(error.response);
        });
        console.log("You posted", (JSON.stringify(movieList)))

        chart();
        
    }, [])

    return (
        <div className='results-screen'>
            <h1>AND THE WINNER IS...</h1>
            <Pie 
                className='result-chart'
                data={ chartData }
                options= { chartOptions }
            />
        </div>
    )
}

export default Results
