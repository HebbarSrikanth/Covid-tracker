import React from 'react'

const CaseTable = () => {
    return (
        <table className='striped centered'>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deceased</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>India</td>
                    <td>31245697</td>
                    <td>708279</td>
                    <td>2321456</td>
                    <td>54789</td>
                </tr>
                <tr>
                    <td>USA</td>
                    <td>6578912</td>
                    <td>708279</td>
                    <td>4521456</td>
                    <td>120789</td>
                </tr>
            </tbody>
        </table>
    )
}

export default CaseTable
