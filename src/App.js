import React, { useEffect } from "react";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";

function App() {
    useEffect(()=>{
      fetch('http://localhost:8085/users')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err)) ; 
    } , [])

  return (
    <>
    <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </>
      

  );
}

export default App;
