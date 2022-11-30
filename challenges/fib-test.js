const readline = require('readline');
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

var series2 = [0, 1];
async function respond() {
    let number = await ask("What would you like the limit to be?");
    while (series2.length < number) {
        let a = series2.pop();
        // console.log(a);
        let b = series2.pop();
        // console.log(b);
        let sum = a + b
        series2.push(b, a, sum);
    }
    console.log(series2);
    console.log(series2.toString());
}
respond();