import React, { useContext, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import DataContext from '../../context/data/dataContext'

const Charts = () => {

    const dataContext = useContext(DataContext)
    const { fetchHistoricData, historicalData } = dataContext

    let linedata = {}

    useEffect(() => {
        fetchHistoricData()
        //eslint-disable-next-line
    }, [])

    if (historicalData !== null) {
        const { cases } = historicalData
        linedata = {
            labels: Object.keys(cases),
            datasets: [{
                label: 'Cases',
                data: Object.keys(cases).map((key) => cases[key]),
                fill: false,
                borderColor: 'red'
            }]
        }
    }


    return (
        <div>
            <Line
                data={linedata}
                options={lineChartOptions}
            />
        </div>
    )
}

const lineChartOptions = {
    scales: {
        yAxes: [{
            stacked: true,
            position: 'right',
            ticks: {
                callback: function (label) {
                    return label / 100000 + 'k';
                }
            }
        }],
        xAxes: [{
            stacked: true,
            type: 'time',
            time: { unit: 'week' }
        }]
    },
    legend: {
        display: false
    }
}

export default Charts
