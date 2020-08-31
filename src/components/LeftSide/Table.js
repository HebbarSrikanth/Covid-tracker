import React, { useContext } from 'react'
import DataContext from '../../context/data/dataContext'

const Table = () => {
    const dataContext = useContext(DataContext)
    const { countryData } = dataContext

    if (countryData !== null) {
        var countryRow = countryData.map((data) =>
            <tr key={data.country}>
                <td><b>{data.country}</b></td>
                <td className='red-text'><b>{data.cases}</b></td>
                <td className='blue-text'><b>{data.active}</b></td>
                <td className='green-text'><b>{data.recovered}</b></td>
                <td className='grey-text'><b>{data.deaths}</b></td>
            </tr>
        )
    }



    return (
        <div style={{ padding: '4%', height: '600px', overflow: 'auto', color: '#6a5d5d' }}>
            <table className='highlight responsive-table'>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {countryRow}
                </tbody>
            </table>
        </div>
    )
}

export default Table
