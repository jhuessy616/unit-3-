//  !Arrays

/* 
     Array is a list-like object whose prototype has methods to perform:
        * traversal
        * mutation
        * other operations
      Arrays are:
        * denoted by [ ]
        * hold multiple data types
        * mutable (can be modified)
        * contents can be accessed by their index
*/

//  Creating an array literal

let arr = [];

console.log(arr instanceof Array, arr); // returns true [ ]

// ? Holding multiple data types
let arrManyDataTypes = [
  "string",
  true,
  90210,
  ["John", "Jeff", "James"],
  undefined,
  null,
];

console.log(arrManyDataTypes); // returns all the values we wrote in [ ]

// ? Accessing Single Dimension Array by index

console.log(arrManyDataTypes[2]); // returns indexed item 90210
console.log(arrManyDataTypes[0], arrManyDataTypes[2], arrManyDataTypes[4]);

// ? Accessing Multi Dimensional Array by index

// What if I want to access "James" out of the nested array?
// ? Chain top-level index to inner-array index
console.log(arrManyDataTypes[3][2]);

// ? What if I want to access "i" of string? No methods allowed (in this example as a challenge)
console.log(arrManyDataTypes[0][3]);

// ? What if I want to acces "ing" of string?
console.log(arrManyDataTypes[0].slice(3));

// ? Arrays are Mutable

// ! Challenge

/* 
    ! Modify our arrManyDataTypes to replace our nested array with an array of your favorite friends.
     ! Extrapolate the data and assign it to a new variable called best friends

    
    
*/
arrManyDataTypes[3] = ["Jenny", "Becca", "Sanela"];
console.log(arrManyDataTypes);

let bestFriends = arrManyDataTypes[3];
console.log(bestFriends);

bestFriends.push("Alice")
console.log("before", arrManyDataTypes[3], "After", bestFriends)
// both add alice because  reassigning an array to a variable doesn't copy, just a new pointer 

// be aware 
let arr1 = ["value1", "value2", "value3"]
let arr2 = arr1
arr2.push("Something")
console.log("arr2", arr2, "arr1", arr1)
// both add something 

// Array Length Methods

/* 
    * Array methods are functions that work on Array constructor
    * Allow us to mutate, traverse, and do other things to arrays
*/
// ? Checks the length of an array

let educationTeam = [
    ["Paul Niemczyk", "Rob Vanarsdall", "Josh Burke", "Eric Winebrenner"],
    ["Elena Bilodeau", "Ben Villa", "Dave Landey"],
    ["Matt Nolan"]
]
console.log(educationTeam.length); 

console.log(educationTeam.length)

for (let i = 0; i < educationTeam.length; i++) {
    console.log(i, educationTeam[i])
}

// ? Get the last item of our education team array
console.log(educationTeam[2])

// what if a ton of people 
console.log(educationTeam[educationTeam.length - 1])
// ! Off-by-one error. index starts at 0 and length starts at 1 so last item isnt the length it's length -1 very common due to index and "normal" counting

/* 
    ? Array.push()
    * Adds an element to the end of an array
    * Returns new length of an array
*/

// !one way 
// educationTeam.push(["Benny Boas", "Kate Sweeney"])
// console.log(educationTeam)

// !other way 
// console.log(educationTeam.push(["Benny Boas", "Kate Sweeney"])) // Returns the length of new array
educationTeam.push(["Benny Boas", "Kate Sweeney"]) //pushes these names in 
/* 
    ? Array.pop()
    * Removes last array element and returns it. Last one pushed in our case
*/

// educationTeam.pop()
// console.log(educationTeam)

let cSuite = educationTeam.pop()

console.log(cSuite) // Returns removed item

/* 
    ? Array.shift()
    * Removes the first element from an array
    * Returns the removed item
*/

educationTeam.shift()

let cancelledTeam = educationTeam.shift()
/* 
    ? Array.unshift()
    * Adds an element to the beginning of an array
    * Returns new length of an array
*/

// lomger way of doing it 
// educationTeam.unshift(["Paul Niemczyk", "Rob Vanarsdall", "Eric Winebrenner"])



educationTeam.unshift(cancelledTeam)
console.log(educationTeam)


// Examples I looked up 
let fruits1 = ["apple", "banana", "cherry"];
fruits1[0] = 'apricot'

console.log(fruits1);
// [ 'apricot', 'banana', 'cherry' ]
// apple has now been replaced by apricot 

// !.push adds a value to the end of an array

let fruits = ["apple", "banana", "cherry"];
fruits.push("pineapple");
console.log(fruits);
// [ 'apple', 'banana', 'cherry', 'pineapple' ]

// !.push can also add several values at once
fruits.push("tangerine", "orange");
console.log(fruits);
// [ 'apple', 'banana', 'cherry', 'pineapple', 'tangerine', 'orange' ]

// !.push returns the new length of the array
let fruitcount = fruits.push("mango", "pear");
console.log(fruitcount);
// or console.log(fruits.push("mango", "pear"));
// 8 
console.log(fruits);
// gives array 
// ['apple','banana','cherry','pineapple', 'tangerine', 'orange', 'mango','pear']

// !full example 
let fruits2 = ["apple", "banana", "cherry"];
let fruitcount2 = fruits2.push("mango", "pear");
console.log(fruitcount2);
// 5
console.log(fruits2);
// [ 'apple', 'banana', 'cherry', 'mango', 'pear' ]
fruits2.push('tangerine', 'orange', 'passion fruit');
console.log(fruits2);
// ['apple','banana','cherry','mango','pear','tangerine','orange','passion fruit']

// ! POP  remove last item 
/* 
.pop always removes the last item in the array
.pop takes no arguments
.pop can only ever remove one item at a time, and it's always the last item in the array
.pop returns the item that was removed. THis means you can use it for variable assignments!
 */

let fruits3 = ["apple", "banana", "tangerine"];
let lastFruit = fruits3.pop();
console.log(fruits3); // => ["apple", "banana"]
console.log(lastFruit); // => "tangerine"

// !

let fruits4 = ["apple", "banana", "cherry", "date", "elderberry"];

// this means "slice from item 1 to item 3"
console.log(fruits4.slice(1, 3)); //=> [ 'banana', 'cherry' ]


// this means "slice from item 2 to the end"
let fruits5 = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits5.slice(2)); //=> [ 'cherry', 'date', 'elderberry' ]
