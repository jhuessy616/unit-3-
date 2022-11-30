// ? Advanced Array Methods

// Arrays are iterable

let bulldogTypes = ["English Bulldog", "French Bulldog", "Victorian Bulldog", "Old English Bulldog", "Bullmastiff", "American Bulldog"]

for (i of bulldogTypes) {
    console.log(i)
} 
// gives the array of dogs 
    
    /*
    ? Array.forEach()
    * Fires a callback function on each element of an array
    * takes item parameter (each iterable)
    * takes index parameter (index of each iterable)
    * takes array parameter (original array on which .forEach() is working)
*/

// bulldogTypes.forEach((item, index, array) => {
//     console.log(item, index, array)
// }
// gives all dogs 


//     bulldogTypes.forEach(i => console.log(i.toLowerCase()))


// Arrow function
//     bulldogTypes.forEach((bully, index, array) => {
//     array[index] = bully.toLowerCase()
// })
//     console.log(bulldogTypes)

  // this will lowercase on these lines but will not alter the array 
    bulldogTypes.forEach(function(bully, index, array) {
    console.log(bully.toLowerCase())
    })
console.log(bulldogTypes);

    // !Can access original area by it's index and alter it
    // for all indexes put [index]
    // this alters the entire array 
//     yeah, but the fact that forEach takes the array itself as a parameter allows you to manipulate it inside the loop
// since within the loop, we're in a distinct set of memory, or "scope"

    bulldogTypes.forEach(function(bully, index, array) {
    array[index] = bully.toLowerCase()
    })

 console.log(bulldogTypes)


    // Trying to uppercase the third letter in each we failed Can't change primitive value of string 
    // need to take entire string redo it and reassign. 

bulldogTypes.forEach(function(bully, index, array) {
    console.log(array[index][2])
    let newBully = `${bully.slice(0, 2)}${bully[2].toUpperCase()}${bully.slice(3)}`
    array[index] = newBully
})
console.log(bulldogTypes)



/* 
    ? Array.map()
    * Creates an array with elements resulting from the callback function
   returns copy unless otherwise specified
   !.map creates a copy of an array. It will not modify the original
*/

let marvelCharacters = ["Captain America", "Black Widow", "Doctor Strange", "Ant Man", "Spider Man"]

let capitalized = marvelCharacters.map(i => i.toUpperCase())

capitalized.push("Hawkeye")

// ! .map creates a copy of an array. It will not modify the original
console.log("original", marvelCharacters, "new", capitalized)

/* 
    ? Array.filter()
    * Creates a new array based on a filter function
*/

// with arrow function 
// let startsA = marvelCharacters.filter(i => i.startsWith("A"))
// console.log(startsA)

// without arrow function 
let startsA = marvelCharacters.filter(function (i) { return i.startsWith("A") })
console.log(startsA)

/* 
    ? Utilize one of the array methods to raise the grade by 15 points for everyone
    ? Those above 90 should not get any points.
*/

let grades = [56, 78, 96, 41, 22, 7, 15, 10, 89]


grades.forEach((grade, index, array) => grade<90? array[index] = grade + 15 : null);
console.log(grades);

// Paul's version
// grades.forEach((grade, index, array) => grade > 90 ? null : array[index] = grade + 15)

// uaing maps and new arrays 
let newGrades = grades.map(grade => grade < 90 ? grade + 15 : grade)
console.log(newGrades)