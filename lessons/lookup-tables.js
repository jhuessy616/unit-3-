// Create a funtion called getStateAbbrevation
//  It will take a single parameter called state
//  function will return the abbreviation

function getStateAbbrevation(state) {
  const stateNames = {
    Alabama: "al",
    Alaska: "ak",
    Arizona: "az",
    Arkansas: "ar",
  };

  return stateNames[state];
}

console.log(getStateAbbrevation("Alabama"));

function getMultipleStateAbbrevations(...states) {
  console.log(states);
  let stateAbbreviations = states.map((state) => getStateAbbrevation(state));

    console.log(stateAbbreviations);
      return stateAbbreviations.join(", ");
    
  
}

console.log(getMultipleStateAbbrevations("Alabama", "Arkansas"));

let commands = {
    movement: ["move", "enter", "walk", "go"],
    pickup: ["pick", "grab", "take"],
    drop: ["drop", "discard"],
    examine: ["read", "look", "examine", "inspect", "study"],
    talkTo: ["ask", "speak", "question", "talk"],
    help: ["help"],
    inventory: ["inventory"],
    unlock: ["unlock", "open"],
    solve: ["solve"],
    room: ["room"],
  };