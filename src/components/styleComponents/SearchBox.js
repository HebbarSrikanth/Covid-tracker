import React from 'react'

const SearchBox = () => {
    const searchBoxStyle = {
        width: '50%',
        margin: '5% auto'
    }

    return (
        <div className='row' style={searchBoxStyle}>
            <div className='nav-wrapper'>
                <div className='input-field'>
                    <input id='search' placeholder='Search Country...' type='search' />
                    <label className="label-icon" htmlFor="search">
                        <i className="material-icons">search</i>
                    </label>
                    <i className="material-icons">close</i>
                </div>
            </div>
        </div>
    )
}

export default SearchBox
