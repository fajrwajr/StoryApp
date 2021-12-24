import React from "react";

let story;
function getStory(name) {
   return { 
   currentScene: "attack", 
   attack: {
   title: "Chapter 1",
   story: `Welcome ${name}, are you ready to play!`,
   choices: [
     {
      choice: "Yes, I'm ready to accept!",
      destination: "battle"   
     },
      {
      choice: "Meh, I think I'd rather just play video games instead.",
      destination: "goHome"       
      } 
    ]
  },
   battle:  {
   title: "The epic battle for Cute Puppistan", 
   story: "It's avarice the angry bird, he looks angry...",
   choices: [
     {
      choice: "Attack him with a sword",
      destination: "sword"   
     },
      {
      choice: "Attack him with a candlestick",
      destination: "candleStick"       
      } 
     ]
   },
    sword: {
      title: "You've saved us!",
      story: "Avarice the Angry Aardvark is defeated and Cute Puppistan is safe!!!! You're, like, so popular now.",
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
  document.querySelector('#content').innerHTML = `
<h1>${story[story.currentScene].title}</h1>
<button><i class="fa fa-bookmark" aria-hidden="true"></i>
</button><p>${story[story.currentScene].story}</p>
${image}
${getInputs()}
 <button id="submit-button">${text}</button>
`
 if (story[story.currentScene].image) {
   document.querySelector("img").src = `./img/${story[story.currentScene].image}`
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

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}


export const Home = () => {
    return (
    <>
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
