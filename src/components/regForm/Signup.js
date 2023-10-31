import React from 'react'
import { Link, } from 'react-router-dom'
import backgroundImage from '../../img/group-14.png'
import NavBar from '../UI/NavBar/NavBar'
import axios, { Axios } from 'axios'
import { useState } from 'react'
import Validation from './SignupValidation'

function Signup  ()  {
  const bg__img__cl = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',  
    backgroundRepeat: 'no-repeat',
    height:'100vh',
    width:'100%',
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }

  const [values,setValues] = useState({
    name:'',
    secondname:'',
    email:'' , 
    password:'',
    

  })
  // const navigate = useNavigate();
  const [errors, setErrors] = useState({})



  const handleInput = (event) =>{
    setValues ({...values, [event.target.name] : event.target.value})
  }


  const handleSubmit =(event) =>{
    event.preventDefault();
    setErrors(Validation(values)) ; 
    if(errors.name === "" && errors.secondname === "" && errors.email === "" && errors.password ===""  ){
      
      axios.post('http://localhost:8082/reactrocketsproject', values)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
  }
 

  //   const [name,setName] = useState('')
  // const [secondname,setSecondname] = useState('')
  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')
  // const [registerStatus,setRegisteredStatus] = useState('')

  // const register =(e) =>{
  //   e.preventDefault() ; 
  //   Axios.post("http://localhost:8081/reactrocketsproject",{
  //     name:name,
  //     secondname:secondname,
  //     email:email, 
  //     password:password
      
  //   }).then((response) =>{
  //     if(response.data.message){
  //       setRegisteredStatus(response.data.message) ; 
  //     }else{
  //       setRegisteredStatus("success")
  //     }
  //   }
  //   )
  // }
  return (
    <>
    <NavBar/>
      <div style={bg__img__cl}>
    <form action="" onSubmit={handleSubmit}  style={{background:'#fff', 
    width: "300px",
    height:"400px",
    padding:"25px",
    borderRadius:"16px"
 }}>
    <h3>Sign up</h3>
    <label  className="vhide">Name</label>
    <input type="text" placeholder='Enter your name' name='name' onChange={handleInput}/>
    {errors.name && <span style={{color:"#FF0000"}}>{errors.name}</span>}

    <input type="text"  placeholder="Enter your Last Name" name='secondname'  onChange={handleInput} />
    {errors.secondname && <span style={{color:"#FF0000"}}>{errors.secondname}</span>}
    <input type="email"  placeholder="Enter your email" name='email'  onChange={handleInput}  />
    {errors.email && <span style={{color:"#FF0000"}}>{errors.email}</span>}

    <label  class="vhide">Password</label>
    <input name='password' type="password" placeholder="Password"  onChange={handleInput} />
    {errors.password && <span style={{color:"#FF0000"}}>{errors.password}</span>}

    <button type='submit' class="signin">Sign up</button>
    <div style={{margin:10}}>if you have an account <Link style={{textDecoration:'underline', fontSize: 20}}  to='/'>sign in</Link></div>
  </form>
  </div>
  </>
  )
}

export default Signup
