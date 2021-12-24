import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//import Home from "./component/home.jsx";
//import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
//import Login from "./component/login.jsx";

export const App = () => {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
 
    const [registerStatus, setRegisterStatus] = useState("");

    //Axios.defaults.withCredentials = true;

    const register = () => {
      Axios.post("https://5001-tomato-butterfly-ad2u3ute.ws-us25.gitpod.io/register", { 
        username: usernameReg,
        password: passwordReg,
      }).then((response) => {
        if (response.data.message) {
          setRegisterStatus(response.data.message)
        } else {
          setRegisterStatus(<Navigate to="/home/*" />)
        } 
      })
    }

    // useEffect(() => {
    //   Axios.get("https://5001-black-buzzard-v2057bi9.ws-us23.gitpod.io/register").then((response) => {
    //     if (registerStatus === true) {
    //       setRegisterStatus(response);
    //     }
    //   }) 
    // }, [])

   /* useEffect(() => {
      Axios.get("http://localhost:5001/login").then((response) => {
        if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
        }
      }) 
    }, [])
*/
  return (
    <div className="App">
       <div className="registration">
         <h1>Registration</h1>
         <label>Username</label>
         <input type="text" onChange={(e) => {
           setUsernameReg(e.target.value);
         }}
         />
         <label>Password</label>
         <input type="text" onChange={(e) => {
           setPasswordReg(e.target.value);
         }}
         />
         <button onClick={register}>Register</button>
       </div>
       <h1>{registerStatus}</h1>  
        </div>
  );
}