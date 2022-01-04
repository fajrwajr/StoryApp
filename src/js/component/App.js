import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//import Home from "./component/home.jsx";
//import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
//import Login from "./component/login.jsx";

export const App = () => {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
 
    const [registerStatus, setRegisterStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const register = () => {
      Axios.post("https://5001-tomato-butterfly-ad2u3ute.ws-us25.gitpod.io/register", { 
        username: usernameReg,
        password: passwordReg,
      }).then((response) => {
        if (response.data.message) {
          setRegisterStatus(response.data.message)
        } else {
          setRegisterStatus(<Navigate to="/login" />)
        } 
      })
    }

  return (
    
    <div className="App">
       <div className="registration">
         <h1>Registration</h1>
         <label>Username</label>
         <input type="text" required onChange={(e) => {
           setUsernameReg(e.target.value);
         }}
         />
         <label>Password</label>
         <input type="text" required onChange={(e) => {
           setPasswordReg(e.target.value);
         }}
         />
         <button onClick={register}>Register</button>
       </div>
       <h1>{registerStatus}</h1>  
        </div>
  );
}