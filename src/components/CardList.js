import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <div>
      {
        //robot = each item in the array, i = the index of the item
        //Map through the array of robots obtained from the fetch in App.js and filtered by filteredRobots function and create a new Card based on the values from each entry.
        robots.map((robot, i) => {
          return (
            <Card
              key={i} //unique keys are necessary for each item, so in this case we are just setting the key to the index of the item.
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          )
        })

      }
    </div>
  )
}

export default CardList
