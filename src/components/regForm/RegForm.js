import React from 'react'
import './RegForm.css' 
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation'

function RegForm  ()  {
  const [values,setValues] = useState({
    email:'' , 
    password:''

  })
  const [errors, setErrors] = useState({})
  const handleInput = (event) =>{
    setValues(prev => ({...prev , [event.target.name] : [event.target.value]}))
  }
  const handleSubmit =(event) =>{
    event.preventDefault() ;
    setErrors(Validation(values)) ; 
  }
 
  // const [name,setName] = useState('')
  // const [secondname,setSecondname] = useState('')
  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')
  // const [email,setEmail] = useState('')
  

  return (

    <form action="" onSubmit={handleSubmit} >
    <h3>Sign in</h3>
    <label  className="vhide">Name</label>
    <input type="email" name="email" placeholder="Enter your email" onChange={handleInput}   />
    {errors.email && <span style={{color:"#FF0000"}}>{errors.email}</span>}
    <label  class="vhide">Password</label>
    <input name="password" id="password" type="password" placeholder="Password" onChange={handleInput}    />
    {errors.password && <span style={{color:"#FF0000"}}>{errors.password}</span>}
    <input type="checkbox" name="remember" id="remember" className="vhide"/>
    <label htmlFor="remember">
      <i className="octicon octicon-check"></i> Remember me
    </label> 
    <button type="submit" class="signin">Sign in</button>
    <div>if you have not an account <Link style={{fontSize: 20,textDecoration:"underline"}} to='/signup'>sign up</Link></div>
  </form>
  )
}

export default RegForm
