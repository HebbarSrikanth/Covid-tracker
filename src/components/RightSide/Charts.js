import React, { useContext, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import DataContext from '../../context/data/dataContext'

const Charts = () => {

    const dataContext = useContext(DataContext)
    const { fetchHistoricData, historicalData } = dataContext

    let linedata = {}

    const values = {
        label: 'Confirmed Cases',
        color: 'rgba(255,0,0,0.5)',
        borderColor: 'rgba(255,0,0,0.2)'
    }

    useEffect(() => {
        fetchHistoricData()
        //eslint-disable-next-line
    }, [])

    if (historicalData !== null) {
        const { cases } = historicalData
        linedata = {
            labels: Object.keys(cases),
            datasets: [{
                label: values.label,
                data: Object.keys(cases).map((key) => cases[key]),
                fill: false,
                borderColor: values.borderColor,
                pointBackgroundColor: values.color,
                pointRadius: '1.5',
                borderJoinStyle: 'miter',
                borderWidth: 4
            }]
        }
    }


    return (
        <div style={{ margin: 'left', width: '50%' }}>
            <Line
                data={linedata}
                options={lineChartOptions}
                maintainAspectRatio={true}
            />
        </div>
    )
}

const lineChartOptions = {
    scales: {
        yAxes: [{
            stacked: true,
            position: 'right',
            gridLines: {
                display: true,
                lineWidth: 0,
                zeroLineWidth: 2,
                zeroLineColor: 'rgba(255,0,0,0.5)',
            },
            ticks: {
                fontColor: 'rgba(255,0,0,0.5)',
                fontFamily: 'Ubuntu',
                beginAtZero: true
            }
        }],
        xAxes: [{
            stacked: true,
            type: 'time',
            position: 'right',
            time: { unit: 'week' },
            gridLines: {
                display: true,
                lineWidth: 0,
                zeroLineWidth: 2,
                zeroLineColor: 'rgba(255,0,0,0.5)',
            },
            ticks: {
                fontColor: 'rgba(255,0,0,0.5)',
                fontFamily: 'Ubuntu',
            }
        }],

    },
    legend: {
        display: true,
        labels: {
            fontColor: 'rgba(255,0,0,0.5)',
            boxWidth: 0,
            fontSize: 20,
            fontFamily: 'Ubuntu',
            padding: 20
        },
        align: 'start'
    },
    maintainAspectRatio: true
}

export default Charts
