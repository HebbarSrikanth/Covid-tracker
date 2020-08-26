import React from 'react'
import Cases from './Cases'
import Charts from '../charts/Charts'

const Home = () => {
    return (
        <div className='row'>
            <div className='col s6'>
                <Cases />
            </div>
            <div className='col s6'>
                <Charts />
            </div>
        </div>
    )
}

export default Home
