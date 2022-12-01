let menu = {
    Burger: 5.00,
    Fries: 3.50,
    Shake: 1.11,
    Salad: 4.45,


    order: function (orderPlaced) {
        let orderSplit = orderPlaced.split(", ");
        let sum = 0
        for (key of orderSplit) {
            if (this[key]) {
                console.log("key", key, "value", menu[key]);
                sum = sum + menu[key];
            }
            else {
                console.log(key + " is not on our menu");
            }
       
            
            
        }
        return sum
        console.log(sum)
    }
}
let order1 = menu.order("Fries, Shake, snake");
// .split can only be run on a string 
console.log(order1);

// let menu = {
//     Burger: 5.00,
//     Fries: 3.50,
//     Shake: 1.11,
//     Salad: 4.45,
// }
// let key = "Fries";
// console.log(menu.Fries);
// console.log(menu["Fries"]);
// console.log(menu[key]);
