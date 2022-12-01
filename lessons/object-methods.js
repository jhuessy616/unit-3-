let dog = {
  name: "Sparky",
  color: "brown",
  bark: function () {
      console.log(`${this.name} just barked`);
    //    return this.name + " just barked";
  },
};
// use this to access within the object.

// How do we access the name using dot notation?

console.log(dog.name);

dog.bark();
// console.log(dog.bark());
// just the other way of you use return.

// What if we wanted to console log "Sparky just barked"


/* 
You have a mechanic's shop called JiffyLoop
The services you offer are the following
- tire rotation: $45
- oil change: $35
- wiper blades: $15

? Create an object with those properties
? Create a key value pair inside of the jiffyLoop Object
? Create a key called order and it will have a function associated with it. It will have a parameter called orderPlaced

*/


let jiffyLoop = {
  "tire rotation": 45,
  "oil change": 35,
  "wiper blades": 15,
  order: function (orderPlaced) {
    let orderSplit = orderPlaced.split(", ");
    console.log("orderSplit", orderSplit);
    let total = 0;
    for (item of orderSplit) {
      console.log("item:", item, "price:", this[item]);
      total = total + this[item];
    }
    this.companyOrders.push(total);
    return total;
  },
  companyOrders: [],
};

// ? How would I reference a tire rotation in the console?

console.log(jiffyLoop["tire rotation"]);

//  call the order key of jiffyLoop and pass it a comma separated value
//  example "tire rotation, oil change"

const order1 = jiffyLoop.order("tire rotation, oil change");

console.log("order1 total", order1);

const order2 = jiffyLoop.order("tire rotation, wiper blades");

console.log(jiffyLoop.companyOrders);
