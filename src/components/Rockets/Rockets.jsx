import React from 'react'
import NavBar from '../UI/NavBar/NavBar'
import RocketsAPI from  './RocketsAPI'
import rocketsBackImg from '../../img/planetsFrameLast.png'

const Rockets = () => {
  const backForRockets = {
    backgroundImage: `url(${rocketsBackImg})`,
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat',
    height:'140vh',
    width:'100%'
  }



  return (
    <div style={backForRockets}>
      <NavBar></NavBar>
      <RocketsAPI />
    </div>
  )
}

export default Rockets
