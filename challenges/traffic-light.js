/* 

We will have a lookup table that maps the state of the traffic light to the possible next valid states of the traffic light.

We will also have a function that changes the current valie state to the next valid state, and prints output to show us what state the system is in. If there is an attempt to put the system in an invalid state, the function will prevent the transition and print some output to tell us that an error occured.

Variables
[ ] Create a lightCurrent variable and set it equal to redLight.
[ ] Create a lightLookUp lookup table that maps the Strings of the color and state of our objects to their Object.
LightStates
[ ] Create a lightStates state machine that maps the states of our objects to their possible next states.
[ ] Create a console log that informs the user of the state of the traffic light.
[ ] Create a changeLight function that accepts the parameter of newLight.
[ ] Inside of changeLight, set up an if statement that checks if lightStates[lightCurrent] includes newLight.
[ ] Inside of this if statement, set lightCurrent to newLight.
[ ] Inside of this if statement, console log the color and state of lightCurrent by checking it in lightLookUp using bracket notation.
[ ] Outside of this if, else console log a message informing the user they cannot go from lightCurrent to newLight.

*/

const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);
let white = "\033[0;39m";
let yellow = "\033[0;33m";
let green = "\033[92m";
let red = "\033[91m"; 


function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}


let lightStates = {
    "green light": ["yellow light"],
    "yellow light": ["red light"],
    "red light": ["green light"],
}


lightCurrent = "red light";

// console.log("Your current light is " + lightCurrent);
function changeLight(newLight) {
    let possibleLights = lightStates[lightCurrent];
  if (possible.includes(newLight)) {
    lightCurrent = newLight;
  }
  else {
    console.log(
      yellow +
      "What you typed in is not a valid option. Valid options are the following... " + color(possibleLights[0]) +
      possibleLights + white);
    console.log(possibleLights);
  
        
}

}

let answer;
async function respond() {
    while (answer !== "exit") {
     answer = await ask( `What light would you like to go to next? Your current light is ${color(lightCurrent)} ${lightCurrent}. ${white} >_`
     );
        changeLight(answer);
  }
  process.exit();
}

respond();

 function color (light) {
  if (light === "green light") {
    return green
  }
  else if (light === "yellow light") {
    return yellow
  }
  else {
    return red
  }
  
}