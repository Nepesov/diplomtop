import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import MainPage from './components/MainPage/MainPage'
import Rockets from './components/Rockets/Rockets'
import Signup from './components/regForm/Signup'

const AppRoute = () => {
  return (
    <Routes>
        <Route path="/rockets" element={<Rockets/>}/>
        <Route path="/shopcosmic" element={<Shop/>}/>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
  )
}

export default AppRoute
