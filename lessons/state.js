const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);
let white = "\033[0;39m";
let yellow = "\033[0;33m";

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
// Don't change anything above this line!!!
/* Create an object called states

- keys: elementary, middle school, high school, college, & military
- each key will have a value that is in an array format
- elementary  you can only go to middle school
- middle school you can only go to high school
- high school - you can go to college, work, military
- college - you can go to work
- military - you can go to work or college
*/

let states = {
    elementary: ["middle school"],
    "middle school": ["high school"],
    "high school": ["college", "military"],
    military: ["work", "college"],
    college: ["work"],
    work: ["retire"]
};

// Initialize our current state to be elementary, this will be our starting point 
let currentState = "high school";
let answer;
async function respond() {
  // your code here
  // remember to use `await` and `ask`
    while (answer !== "exit") {
     answer = await ask( `What institution would you like to go to next? Your current institution is ${currentState}. >_`
     );
        updateState(answer);
  }
  process.exit();
}

respond();
/* 
- function should check to see if the current new state selection is an option to move to the next state options
- Example: I can only go to Middle School if it's on the list
- if we do not have a match then display that to the user and what are the valid paths that they can go


*/

function updateState(newState) {
  let possibleOptionsToUpdateState = states[currentState];
  if (possibleOptionsToUpdateState.includes(newState)) {
    currentState = newState;
    console.log(
      yellow + "You have successfully moved to a new status." + white
    );
  }
    else {
    // Let the user know that they typed in a wrong response
    console.log(
      yellow +
        "What you typed in is not a valid option. Valid options are the following... " +
        possibleOptionsToUpdateState.join(", ") +
        white
    );
  }
}

let firstName = "Rob";
let lastName = "Vanarsdall";

let person1 = {
  firstName,
  lastName,
};

console.log(person1);
