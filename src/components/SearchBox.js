import React from 'react'
import '../containers/App.css'

const SearchBox = ({ searchChange }) => { //passed in the onSearchChange function from App.js
  return (
    <div>
      <input
        id='searchbox'
        type='search'
        placeholder='search robots'
        className='pa3 ba b--green bg-lightest-blue'
        onChange={searchChange} //This is what sets the value of 'searchfield' in App.js
      />
    </div>
  )
}

export default SearchBox
