function capitalize(string) {
  //Isolate first letter of word
  let firstLetter = string[0];
  //capitalize the first letter
  firstLetter = firstLetter.toUpperCase();
  //get the rest of the word
  let restOfWord = string.slice(1).toLowerCase();

  //rejoin the parts of the word
  let fullWord = firstLetter + restOfWord;
  return fullWord;
}

console.log(capitalize("sChooL")); // output: School
console.log(capitalize("sChool is CoOL")); //School is cool

function titleize(phrase) {
    console.log("phrase", phrase);
    //  Split the phrase into individual words by spliting it based on an empty space
    let splitPhraseArray = phrase.split(" ");
    console.log("splitPhraseArray", splitPhraseArray)
    //   Create a variable to store the returned values from the .map()
  let arrayOfCapitalLetteredWords = splitPhraseArray.map(capitalize);
    // default value for join is a comma
  let combinedWords = arrayOfCapitalLetteredWords.join(" ");
  console.log("combinedWords:", combinedWords);
}

titleize("i nEEd hElp wITH mY CODE");

function titleizeRefactored(phrase){
  return phrase.split(" ").map(capitalize).join(" ")
}

console.log(titleizeRefactored("sChool is CoOL"));

const arrowFunctionRefactored = (phrase) =>
  phrase.split(" ").map(capitalize).join(" ");

console.log("arrow function", arrowFunctionRefactored("sChool is CoOL"));//arrow-declared functions cannot be accessed before they are initialized
