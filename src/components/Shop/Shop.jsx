import React from 'react'
import NavBar from '../UI/NavBar/NavBar'
import main_hudi from '../../img/hudi_main_space_x.webp'
import stili from './Shop.module.css'

const Shop = () => {
  return (
    <div>
      <NavBar/>
        <img src={main_hudi} alt="" className={stili.main_img_hudi} />
    </div>
  )
}

export default Shop
