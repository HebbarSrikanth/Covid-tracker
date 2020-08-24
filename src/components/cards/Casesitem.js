import React from 'react'
import PropTypes from 'prop-types'

const Casesitem = ({ card }) => {
    const { name, classStyle, number } = card

    const currFormater = new Intl.NumberFormat('en-IN')

    return (
        <div className='col s4' style={cardStyle}>
            <div className='card-panel white' style={{ height: '13em' }}>
                <span className={classStyle}>{name}</span>
                <div className={classStyle} style={{ marginTop: '60%' }}>{currFormater.format(number)}</div>
            </div>
        </div>
    )
}

const cardStyle = {
    textAlign: 'center',
    width: '25%',
    cursor: 'pointer'
}

Casesitem.prototype = {
    card: PropTypes.object.isRequired
}

export default Casesitem
