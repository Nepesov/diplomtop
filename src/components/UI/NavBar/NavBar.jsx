import React from 'react'
import NavStyles from './NavBar.module.css'
import yImg from '../../../img/yImg.png'
import { Link } from 'react-router-dom'
import MyModel from '../../MyModel/MyModel'
import { useState } from 'react'
import RegForm from '../../regForm/RegForm'
// import RegForm from '../../regForm/RegForm'
// import SignUp from '../signup/SignUp'
// import MyModelSec from '../../MyModel/MyModelSec'

const NavBar = () => {
    const main_img = {
      yImg: `url(${yImg})`
      
    }
      const[model,setModel] = useState(false) ; 
      // const[modelsec, setModelSec] = useState(false)
      // console.log(modelsec)


  return (
    <div class={NavStyles.navbar}>
  <Link style={{textDecoration:'none'}} to='/'><div class={NavStyles.navbar_brand}>Parable
    <img style={{width:'17%'}} src={yImg} alt="" />
  </div></Link>




  <div class={NavStyles.navbar_items}>
    <Link style={{textDecoration:'none'}} to='/rockets'><div class={NavStyles.navbar_item}><a href="#">Rockets</a></div></Link>
    <Link style={{textDecoration:'none'}} to='/shopcosmic'><div class={NavStyles.navbar_item}><a href="#">Shop</a></div></Link>
  </div>



  <div className={NavStyles.registration}>
      <button className={NavStyles.registration__btn} onClick={() => setModel(true)}>Sign in</button>

      <MyModel visible={model} setVisible={setModel}>
        <RegForm></RegForm>
      </MyModel>

  </div>




  
</div>


  )
}

export default NavBar
