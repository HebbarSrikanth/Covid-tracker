import React, { useContext, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import DataContext from '../../context/data/dataContext'

const Charts = ({ label, color, borderColor, toClutter }) => {

    const dataContext = useContext(DataContext)
    const { fetchHistoricData, historicalData, country } = dataContext

    let linedata = {}
    let value = ''

    useEffect(() => {
        console.log('Called useEffect')
        fetchHistoricData(country)
        //eslint-disable-next-line
    }, [country])

    if (historicalData !== null) {
        if (toClutter === 'cases') {
            const { cases } = historicalData
            value = cases
        }
        else if (toClutter === 'deaths') {
            const { deaths } = historicalData
            value = deaths
        }
        else {
            const { recovered } = historicalData
            value = recovered
        }
        linedata = {
            labels: Object.keys(value),
            datasets: [{
                label: label,
                data: Object.keys(value).map((key) => value[key]),
                fill: false,
                borderColor: borderColor,
                pointBackgroundColor: color,
                pointRadius: '1.5',
                borderJoinStyle: 'miter',
                borderWidth: 4
            }]
        }
    }

    var lineChartOptions = {
        scales: {
            yAxes: [{
                stacked: true,
                position: 'right',
                gridLines: {
                    display: true,
                    lineWidth: 0,
                    zeroLineWidth: 2,
                    zeroLineColor: color,
                },
                ticks: {
                    fontColor: color,
                    fontFamily: 'Ubuntu',
                }
            }],
            xAxes: [{
                type: 'time',
                position: 'left',
                time: { unit: 'week' },
                gridLines: {
                    display: true,
                    lineWidth: 0,
                    zeroLineWidth: 0,
                },
                ticks: {
                    fontColor: color,
                    fontFamily: 'Ubuntu',
                }
            }],

        },
        legend: {
            display: true,
            labels: {
                fontColor: color,
                boxWidth: 0,
                fontSize: 20,
                fontFamily: 'Ubuntu',
                padding: 20
            },
            align: 'start'
        },
        maintainAspectRatio: true
    }


    return (
        <div style={{
            margin: '10%', width: '50%', background: borderColor, borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.02)'
        }}>
            <Line
                data={linedata}
                options={lineChartOptions}
                maintainAspectRatio={true}
            />
        </div>
    )


}



export default Charts
