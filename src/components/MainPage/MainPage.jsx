import React from 'react'
import cl from './MainPage.module.css'
import NavBar from '../UI/NavBar/NavBar'
import backgroundImage from '../../img/group-14.png'
import DivExplore from '../UI/divExplore/DivExplore'

const MainPage = () => {
  const bg__img__cl = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat',
    height:'100vh'
  }
  return (
    <div className={cl.mainPage} style={bg__img__cl}>
      <NavBar/>
      <DivExplore/>
    </div>
  )
}

export default MainPage
