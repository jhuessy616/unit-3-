/* 
Classes

Classes are templates for creating objects
They encapulate data with code 
To declare a class you must use the keyword "class" followed by the name of the class.
The name of class is typically using PascalCasing
example:  UniversityTeacher  CollegeStudent

When you create a class the constructor method is invoked first
*/

class Pizza {
  // inside the constructor () you can put parameters
  constructor(diameter, type) {
    this.diameter = diameter;
    this.type = type;
  }

  //   method example:
  bake() {
    console.log("The pizza will be ready in 10 mins");
  }
}

// In order to use the class you need to create instance of it

let myPepperoniPizza = new Pizza(14, "pepperoni");

// ? How do I access the class properties
// Use dot notation

console.log(myPepperoniPizza.type);

// ? How do I invoke a method on the class Pizza

myPepperoniPizza.bake();

// Create a sausage pizza with a diameter of 10, type being sausage
let mySausagePizza = new Pizza(10, "sausage");

console.log(mySausagePizza.type);

// ! Challenge: Rectangle Class
/* 
 Rectangle class should accept two parameters when creating (height & width)

 - create a method called area that will multiply the height and width and return a value
 - create a method called isSquare that will return true if it is a square and false if it is not a square
*/

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  isSquare() {
    return this.height === this.width ? true : false;
  }
}

// Create a variable called rectangle1 and assign it the height of 10 and width of 5

let rectangle1 = new Rectangle(10, 5.1);

console.log("Area", rectangle1.area());

console.log("isSquare", rectangle1.isSquare());


// How could I use this in my project

class Room {
  constructor(name, description, inventory, requiredKey) {
    this.name = name;
    this.description = description;
    this.inventory = inventory;
    this.requireKey = requiredKey;
    this.isLocked = requiredKey ? true : false;
  }
  removeInventory(item) {
    this.inventory = this.inventory.filter((inventory) => inventory != item);
    return this.inventory;
  }

  //   create method to showInventory
}

let livingRoom = new Room(
  "living room",
  "You have entered the living room in there you find....",
  ["knife", "note"]
);

console.log(livingRoom.description);

let bedroom = new Room("bedroom", "You entered the bedroom");

class Player {
  constructor(inventory) {
    this.inventory = inventory;
  }
  addInventory(inventoryToAdd) {
    this.inventory.push(inventoryToAdd);
    return this.inventory;
  }

  doesPlayerHaveCorrectItem(item) {
    return this.inventory.includes(item);
  }
}

let gamePlayer = new Player([]);

console.log("add inventory", gamePlayer.addInventory("key"));
console.log(
  "does player have item",
  gamePlayer.doesPlayerHaveCorrectItem("key")
);

console.log(livingRoom.removeInventory("knife"));
console.log(gamePlayer.addInventory("knife"));




// ---------------------------- SECTION OFF CODE ---------------
/* 
classes and objects creation

Rules/State

Commands are possible (pickup, move, open, help)
*/

let roomStates ={
  foyer: ["library", "hall"],
  library: ["foyer", "bathroom"],
  bathroom:["library"],
  hall:["foyer"]
}