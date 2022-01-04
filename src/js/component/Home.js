import React, { useState } from "react";
import Axios from 'axios';

export const Home = () => {
    const [radio, setRadio] = useState("");

    const saveOption = () => {
        Axios.post("https://5001-tomato-butterfly-ad2u3ute.ws-us25.gitpod.io/choice", { 
          select: radio,
        }).then((response) => {
          if (response) {
            console.log("success");
          }
        })
      }
    return (
    <>
    <h1>Welcome </h1>
   <button id="prev-btn">
        <i className="fas fa-arrow-circle-left"></i>
    </button> 

    <div id="book" className="book">
        <div id="p1" className="paper">
            <div className="front">
                <div id="f1" className="front-content">
    <div id="content">
               Select Voice: <select id='voiceList'></select> 
 
    <h1>Your Decision</h1>
   Mock choices
    <input id="choice-input" value="Red" type="radio" onChange={(e) => {setRadio(e.target.value)}}></input>
    This is a mock story
    <button onClick={saveOption}>Save</button>
<br></br>
      <button id='btnSpeak'>Speak!</button>
  <p id='txtInput'>What is your name?</p>
        <input id="name-input" type="text"></input>
    <button id="start-button">Start story!</button>
    </div>
    </div>
    </div>
    <div className="back">
                <div id="b1" className="back-content">
                     <div id="#content">
                    </div>   
                </div>
            </div>
        </div>
    <div id="p2" className="paper">
            <div className="front">
                <div id="f2" className="front-content">
                    <h1>Front 2</h1>
                </div>
            </div>
          <div className="back">
                <div id="b2" className="back-content">
                    <h1>Back 2</h1>
                </div>
            </div>
           </div> 
            <div id="p3" className="paper">
            <div className="front">
                <div id="f3" className="front-content">
                    <h1>Front 3</h1>
                </div>
            </div>
           <div className="back">
                <div id="b3" className="back-content">
                    <h1>Back 3</h1>
                </div>
            </div>
            </div>
    </div> 
            <button id="next-btn">
        <i className="fas fa-arrow-circle-right"></i>
    </button>              
    </>
    )
}
