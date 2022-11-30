

var series2 = [0, 1];

    while (series2.length < 10) {
        let a = series2.pop();
        // console.log(a);
        let b = series2.pop();
        // console.log(b);
        let sum = a + b
        series2.push(b, a, sum);
    }
    console.log(series2);
    console.log(series2.toString());

   
    

   
   
 
var series = [0, 1];

while (series.length < 10) {
    let a = series[series.length - 1];
    // console.log(a);
    let b = series[series.length - 2];
    // console.log(b);
    let sum = a + b
    series.push(sum);
}
    
 
console.log(series);

