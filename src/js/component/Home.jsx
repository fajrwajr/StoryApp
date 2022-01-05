import React, { useState } from "react";
import Axios from 'axios';
import Rose from "../../img/rose.png";

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
      choice: "Meh, I think I'd rather just play video games instead.",
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
      image: "1988.jpg",   
      story: "You fool! Why did you open the door? You let in PumpkinHead, he won't stop until he kills you. I'm sorry it had to end this way!",
      defaultDestination: "attack",
    },
    candleStick: {
      title: "A candlestick, seriously?",
      story: "That's not even a real weapon. Avarice the Angry Aardvark easily defeated you. I really just don't understand why you would pick a candlestick over a sword.",
      image: "candlestick.jpg",
      defaultDestination: "attack"
    },           
   goHome: {
    title: "Back at home!",
    story: "Yes, you're back home. No need to feel guilty...",
     image: "video_game.jpg",
     defaultDestination: "attack",
     buttonText: "Let's try this again"  
   } 
 }
}    

document.addEventListener("DOMContentLoaded", function() {
let button = document.querySelector('#start-button')
let input = document.querySelector('#name-input')
let content = document.querySelector('#content')
 button.addEventListener('click', function() {
  let name = document.querySelector('#name-input')
  story = getStory(name.value);
   renderScene()  
  })
})
    
function renderScene() {
  let text = "Next"
  let image = "";
    
 if(story[story.currentScene].image) {
   image = `<img id = "story_image" />`
  }   
  if(story[story.currentScene].buttonText) {
    text = story[story.currentScene].buttonText
  }
    content.innerHTML = `
<h1>${story[story.currentScene].title}</h1>
<button><i className="fa fa-bookmark" aria-hidden="true"></i>
</button><p>${story[story.currentScene].story}</p>
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
       <div id="wrapper">
    <div id="container">

        <section className="open-book">
            <header>
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
                    <label for="name-input">What is your name?</label>
                    <input id="name-input" type="text"></input>
                    <button id="start-button">Start story!</button>
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