import React, { useState, useEffect, useContext } from 'react';
import {MovieListContext} from "../MovieListContext";
import { Pie } from 'react-chartjs-2';
import axios from 'axios';


function Results() {
    const [movieList, setMovieList] = useContext(MovieListContext);
    const [testData, setTestData] = useState()
    const [chartData, setChartData] = useState();
    const [chartOptions, setChartOptions] = useState();
    const [render, setRender] = useState(false);
    let newData = [];

    

    
    async function handleResults() {
        await fetch('http://192.168.254.81:3000/api')
            .then(res => res.json())
            .then(json => {
                newData = (json.data)
                return newData
            })
            console.log("data", newData)

            const chart = () => {
                setChartData({
                    labels: newData.map(item => (item.title)),
                    datasets: [
                        {
                            label: "RESULTS",
                            data: newData.map(item => [item.rating]),
                            backgroundColor: [
                                'red',
                                'blue',
                                'yellow',
                                'green',
                                'purple'
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
        chart();
    }

    return (
        <div className='results-screen'>
            <h1>WAITING...</h1>
            <button
            className="results-btn" 
            onClick={handleResults}>
                PULL THE VOTES
            </button>
                <Pie 
                    className='result-chart'
                    data={ chartData }
                    options= { chartOptions }
                />
        </div>
    )
}

export default Results
