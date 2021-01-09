import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

const App = () => {
  /*
  Robot and Searchfield "state" using array destructuring.
  Basically, when useState runs, it calls setRobots function to update 'robots'
  The default state is whatever is set in the brackets, so in this case it's an empty array for 'robots'
  an empty string for 'searchfield' and a count of 0 for 'count.'
  */
  const [ robots, setRobots ] = useState([])
  const [ searchfield, setSearchfield ] = useState('')
  const [ count, setCount ] = useState(0)

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users') //grab the users from this link, convert to json, and set 'robots' to be this list of users.
    .then( response => response.json() )
    .then( robots => {setRobots( robots )} )
    console.log(count)
  }, [count]) //only run useEffect if 'count' changes. (Other than when it runs when the page first loads.)
  //If this secondary argument is left blank, useEffect will continuously run, since its data will be continuously updated, even though it hasn't changed.
  //In order to make useEffect run only once when the App starts, simply put an empty array there.

  const onSearchChange = event => {
    setSearchfield( event.target.value )
    //When the search box changes, use the event of the search box changes to update the searchfield 'state' to be whatever is typed in the input field.
  }

  //create a filtered list of robots based on what is typed in the input field
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className='tc'>
        <img
          src='https://fontmeme.com/permalink/201202/2b05458e27d8a5df9a4b631e27c77ef9.png'
          width='400px'
        />
        <SearchBox searchChange={onSearchChange} /> {/* pass onSearchChange function into the SearchBox component so it can be updated */}
        <button onClick={() => setCount(count+1)}>Click Me!</button> {/*Just a demonstration of adding a button that updates 'count' each time it is clicked*/}
        <Scroll>
            <CardList robots={filteredRobots} /> {/*Pass the list of filtered robots to Cardlist to be shown on the page*/}
        </Scroll>
      </div>
    )
}

export default App
