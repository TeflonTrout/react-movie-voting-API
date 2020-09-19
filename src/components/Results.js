import React, { useState, useEffect, useContext } from 'react';
import {MovieListContext} from "../MovieListContext";
// import { Pie } from 'react-chartjs-2';
import axios from 'axios';


function Results() {
    const [movieList, setMovieList] = useContext(MovieListContext);
    const [testData, setTestData] = useState()
    const [chartData, setChartData] = useState();
    const [chartOptions, setChartOptions] = useState();
    let newData = [];

    // const chart = () => {
    //     setChartData({
    //         labels: newData.map(item => [item.title]),
    //         datasets: [
    //             {
    //                 label: "RESULTS",
    //                 data: newData.map(item => [item.rating]),
    //                 hidden: true,
    //                 backgroundColor: [
    //                     'red',
    //                     'blue',
    //                     'yellow',
    //                     'green',
    //                     'purple'
    //                 ]
    //             }
    //         ],
    //         borderWidth: 1
    //     });
    //     setChartOptions({
    //         responsive: true,
    //         maintainAspectRatio: true,
    //         animation: {
    //             duration: 3000,
    //             easing: 'easeInBounce'
    //         },
    //         layout: {
    //             padding: 25
    //         },
    //         legend: {
    //             labels: {
    //                 fontColor: 'black',
    //                 fontSize: 25
    //             }
    //         }
    //     })
    // }

    async function handleResults() {
        await fetch('http://192.168.254.81:3000/api')
            .then(res => res.json())
            .then(json => {
                newData = (json.data)
                return newData
            })
            console.log(newData)
        // chart();
    }

    return (
        <div className='results-screen'>
            <h1>AND THE WINNER IS...</h1>
            <button className="results-btn" 
            onClick={handleResults}>Results</button>
            {/* <Pie 
                className='result-chart'
                data={ chartData }
                options= { chartOptions }
            /> */}
        </div>
    )
}

export default Results
