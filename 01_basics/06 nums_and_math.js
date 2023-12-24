const score = 400
const balance = new Number(100)

//console.log(balance); 
//console.log(score);

//console.log(balance.toString().length);//3
//console.log(balance.toFixed(2));//100.00

const otherNumber = 1123.8967

//console.log(otherNumber.toPrecision(3))//23.9 exponential if not enough precision

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));//indian standard

// +++++++++++++++++++maths+++++++++++++++

console.log(Math);//Object

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.min(3,4,5,6));
//0 to 1
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))+min)

