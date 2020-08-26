import React, { Fragment, useEffect, useState } from 'react'
//import Casesitem from './Casesitem'
import SearchBox from '../styleComponents/SearchBox'
import CaseTable from '../countryCasesTable/CaseTable'
import Axios from 'axios'
import Casesitem from './Casesitem'

const Cases = () => {

    const [data, setData] = useState('')

    const fetchData = async () => {
        setData((await Axios.get('https://covid19.mathdro.id/api')).data)
    }

    useEffect(() => {
        fetchData()
        //eslint-disable-next-line
    }, [])

    console.log(data)
    // const details = Object.keys(data)
    //     .map((key) => data[key])
    // console.log(details)



    const cardDetails = [
        {
            name: 'Confirmed',
            classStyle: 'red-text',
            id: 1,
            number: 3149759
        },
        {
            name: 'Active',
            classStyle: 'blue-text',
            id: 2,
            number: 708100
        },
        {
            name: 'Recovered',
            classStyle: 'green-text',
            id: 3,
            number: 2382795
        },
        {
            name: 'Deceased',
            classStyle: 'grey-text',
            id: 4,
            number: 58307
        }
    ]
    console.log(cardDetails)

    return (
        <Fragment>
            <SearchBox />
            <div className='row'>
                {cardDetails.map((card, id) => (
                    <Casesitem key={id} card={card} />
                ))}
            </div>
            <CaseTable />
        </Fragment>
    )
}

export default Cases

