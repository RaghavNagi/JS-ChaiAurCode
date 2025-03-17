const score = 400;
console.log(score); //400

const balance = new Number(400);
console.log(balance); //[Number: 400]
// if we run this in console 
// it will also show functions in protocol

console.log(typeof balance.toString()); //string

console.log(balance.toFixed(2)); //400.00


const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(3)); 
// toPrecision returns a string
//if otherNumber = 23.8966 => 23.9
//if otherNumber = 123.8966 => 124


const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));
//  if we don't put en-IN it will use default value
//  acc to us system 1,000,000





// +++++++++++++++++  Maths  ++++++++++++++++++++



console.log(Math);
// use this in browser and it will tell all the function
// and values in math library

// console.log(Math.abs(-4)); //it will convert all the negative values to positive
// console.log(Math.round(4.3)); //it will round of your value
// console.log(Math.ceil(4.2));  //it will give top value (4.2 => 5)
// console.log(Math.floor(4.2)); //it will give min value (4.2 => 4)
// console.log(Math.min(4,3,6,8)); //return minimum value
// console.log(Math.max(4,3,6,8)); //return maximum value


console.log(Math.random());  //between 0-1


console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+min);
// above line is to get min and max value between chosen number
// using Math.random()


