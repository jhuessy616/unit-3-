const { type } = require("os")
const { resolve } = require("path")
let readline = require("readline")
const { pathToFileURL } = require("url")
let rl = readline.createInterface({input: process.stdin, output: process.stdout})

let ask = async (q) => {
    return new Promise((resolve, reject) => {
        rl.question(q, resolve)
    })
}

function userDefinedFibArray(limit = 100, startingNumberOne = 0, startingNumberTwo = 1) {
    
    let series = [startingNumberOne, startingNumberTwo]
    
    while (series.length < limit) {
        let valueTwo = series.pop()
        let valueOne = series.pop()
        let valueThree = valueOne + valueTwo
        series.push(valueOne, valueTwo, valueThree)
    }

    console.log(series)
}

let result = async () => {
    let limit = parseInt(await ask("Limit?"), 10)
    let s1 = parseInt(await ask("First Number?"))
    let s2 = parseInt(await ask("Second Number?"))

    return userDefinedFibArray(limit, s1, s2)
}

result()



x()
function x() {
    console.log("Function x")
}
// this works because functions will fun through and looks for answer 
// function dec;aration should always happen before its called 

// y()
// let y = function () { console.log("Function y") }
// // this does NOT work because its stored in a variable 

var name = "paul"
console.log(name);
// variables must be defined before 
