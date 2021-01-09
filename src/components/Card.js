import React from 'react'

const Card = ({ name, email, id }) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='funny robot' /> {/*Use the robohash site to create a random image of the robot based on the ID*/}
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
