 const name = "raghav";
 const repoCount = 50;

//  console.log(name + repoCount + " value");
//  This is not a good practice instead use below method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 
const gameName = new String('random-xyz');
// If we use the above line 
// in console browser we also get string methods in prototype
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length); // 9
// console.log(gameName.toUpperCase()); //it doesn't change its original value
// console.log(gameName.charAt(2)); // n
// console.log(gameName.indexOf('x')); // 6

const newString = gameName.substring(0,3);
console.log(newString);
// we can give -ve value in slice but not in substring
const anotherString = gameName.slice(-8,3);
console.log(anotherString);

const newStringOne = "   abcde      ";
console.log(newStringOne.trim()); //remove starting and end space

const url = "https://raghav.com/raghav%20nagi";
console.log(url.replace('%20' , '-'));

console.log(url.includes('raghav'));


console.log(gameName.split('-'));
