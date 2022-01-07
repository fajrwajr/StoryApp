import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import Rose from "../../img/book.png";
import Knock from "./door-knock.jpg";
import Scary from "./newhead.gif";
import House from "./house.gif";
import Surface from "./creeping3.jpg";
import Beneath from "./hide.gif";
import Scare from "./myers1.gif";

export const Home = () => {
    let story;
function getStory(name) {
   return { 
   currentScene: "attack", 
   attack: {                   
   title: "Chapter 1",
   story: `Hey ${name}, do you want to play?`,
   choices: [
     {
      choice: "Yes, I'd like to play!",
      destination: "battle"   
     },
      {
      choice: "No, I think I'd rather just stay inside.",
      destination: "goHome"       
      } 
    ]
  },
   battle:  {
   title: "A turn of the knob", 
   image: "door-knock.jpg",
   story: "You hear a knock at your door, and a strange erie voice mumbling in the background. What do you do?",
   choices: [
     {
      choice: "Answer the door",
      destination: "sword"   
     },
      {
      choice: "Stay quiet",
      destination: "candleStick"       
      } 
     ]
   },
    sword: {
      title: "It was nice knowing you!",
      image: "newhead.gif",   
      story: "You fool! Why did you open the door? You let in PumpkinHead, he won't stop until he kills you. I'm sorry it had to end this way!",
      defaultDestination: "attack",
    },
    candleStick: {
      title: "You've made a good choice",
      image: "creeping3.jpg",
      story: "Something sinister was going to hurt you behind that door",
      choices: [
        {
         choice: "Go to kitchen to get a weapon",
         destination: "good"   
        },
         {
         choice: "Go to bedroom to get a weapon",
         destination: "bad"       
         } 
        ]      
    }, 
    good: {
      title: "Up in defense",
      image: "myers1.gif",   
      story: "You called the police and got a weapon, you're safe or are you?",
      defaultDestination: "attack",
    },
    bad: {
      title: "Beneath the Surface",
      image: "hide.gif",
      story: "There's something under the bed! Run! Hello? Hello...",   
      defaultDestination: "attack",    
    },   
   goHome: {
    title: "Back at home!",
    story: "Sometimes what's inside is scarier than whats outside",
     image: "house.gif",
     defaultDestination: "attack",
     buttonText: "Let's try this again"  
   } 
 }
}    

document.addEventListener("DOMContentLoaded", function() {
let button = document.querySelector('#start-button')
let content = document.querySelector('#content')
 button.addEventListener('click', function() {
  story = getStory();
   renderScene()  
  })
})
    
function renderScene() {
  let text = "Next"
  let image = "";
    
 if(story[story.currentScene].image) {
   image = `<img id = "story_image"  />`
  }   
  if(story[story.currentScene].buttonText) {
    text = story[story.currentScene].buttonText
  }
    content.innerHTML = `
      <h1>${story[story.currentScene].title}</h1>
<p>${story[story.currentScene].story}</p>
${image}
${getInputs()}
 <button id="submit-button">${text}</button>
`
 if (story[story.currentScene].image) {
   document.querySelector("img").src = `${story[story.currentScene].image}`
 }
 let button = document.querySelector("#submit-button");
button.addEventListener("click", function() {
    getInputValue()
  }) 
}  

 function getInputValue() {
  let inputs = document.querySelectorAll('input[type="radio"]');
   for (let i = 0; i < inputs.length; i++) {
     if (inputs[i].checked) {
   story.currentScene = inputs[i].getAttribute('data-destination')
   renderScene();
      return;   
      }
    } 
   story.currentScene = story[story.currentScene].defaultDestination
  renderScene()   
 }


function getInputs() {
    let input = ""
    if(!story[story.currentScene].choices) {
     return "";
    }
    for(let i = 0; i < story[story.currentScene].choices.length; i++) {
      input += `
    <div>
    <input data-destination = ${story[story.currentScene].choices[i].destination} id="radio${i}" type="radio" name="choices" />
    <label for="radio${i}">${story[story.currentScene].choices[i].choice}<label/>
    </div> `  
    }
   return input; 
}
    return (
    <>
       <h1>Welcome </h1>
       <div id="wrapper">
    <div id="container">

        <section className="open-book">
            <header>
            <Link to="/books">
						<div className="btn">Shop For Books</div>
						</Link>
                <h1>Chapter 1</h1>
                <h6>Away from Home</h6>
            </header>
            <article>
                <h2 className="chapter-title">It's your choice...</h2>
                <p>
                  Im so curious about knowing the unknown; it can be scary, but I see it as a game - Hrithik Roshan
                </p>
                <p>    <div id="content">
                    <h1>Your Decision</h1>
                    <button style={{ marginRight: "-80px" }} id="start-button">Start story!</button>
                    </div></p>
                    <br></br><br></br>
                   <div className="special">
                       <img src={Rose} style={{ height: "50rem" }}/>
                </div> 
            </article>
            <footer>
                <ol id="page-numbers">
                    <li>1</li>
                    <li>2</li>
                </ol>
            </footer>
        </section>

    </div>
</div>
    </>
    )
}