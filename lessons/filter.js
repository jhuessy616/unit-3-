/* 
Filter:
- Does not destory the original array
- Typically store the filted array in a new variable
- Takes callback function that returns either true or false
- Loops through the array
- Must have a RETURN (Arrow functions the return is implied if only one line of code)
*/

let fruits = ["apple", "pear", "mango", "orange", "pineapple"]

// ?  How can I use a filter to remove the mango?
// Using to lowercase makes sure we will pull it independent of spelling 

const filteredFruit = fruits.filter((fruit) => fruit.toLowerCase() !== "mango");

console.log(filteredFruit);

// ? How can is remove any furit that has the word apple in it.

let fruit1 = "pineapple";

// this is how we check to see if the word is included 
console.log(fruit1.includes("apple"));

const filteredFruit1 = fruits.filter((fruit) => !fruit.includes("apple"));

console.log(filteredFruit1);

// Using without arrow functions 
// const filteredFruitFunctionExample = fruits.filter(removeMango);

// function removeMango(fruit) {
//   return fruit !== "mango";
// }

// console.log("Filtered Function", filteredFruitFunctionExample);

// // Another way 
// const filteredFruitFunctionExample = fruits.filter(function (fruit) {
//   return fruit !== "mango";
// });

// ? Challenge: how do you remove the 5's from the array.
// ? Store it in a new variable and console.log that variable.
let myNumberArray = [3, 5, 7, 3, 5, 5, 5, 2, 7, 2, 12, 5];

let noFives = myNumberArray.filter((number) => number !== 5);

console.log(noFives);

let noFives2 = myNumberArray.filter(function (number) { return number !== 5 });
console.log(noFives2);

// TODO: Come back for Jeopardy
let movies = [
  { name: "Top Gun 2", category: "Action" },
  { name: "Scary Movie 5", category: "Horror" },
];

movies.push({ name: "It", category: "Horror" });
movies.push({ name: "Get Out", category: "Horror" });
movies.push({ name: "Taken", category: "Action" });

console.log(movies);


// ? How can I get a filtered array of just the action movies?

const actionMovies = movies.filter((movie) => movie.category === "Action");

console.log(actionMovies);


// just the horror movies 
const horrorMovies = movies.filter((movie) => movie.category === "Horror");

console.log(horrorMovies);