import React from "react";
import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";

function App() {
  return (
    <>
    <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </>
      

  );
}

export default App;
