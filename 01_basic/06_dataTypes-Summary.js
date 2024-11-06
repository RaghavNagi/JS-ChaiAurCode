/*
JavaScript is a dynamically typed language.
This means that the type of a variable is determined at runtime,
not at compile time. You don’t need to specify the type when declaring a variable,
and a variable’s type can change as the program runs.

For example:
let x = 42;    // x is initially a number
x = "hello";   // x is now a string

However, JavaScript’s typing behavior can be modified by using TypeScript,
a superset of JavaScript, which adds optional static typing.
With TypeScript, you can declare types explicitly,
making it easier to catch type-related errors before runtime.
*/



// Primitive - call by value 
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 912354824182432n;
console.log(typeof bigNumber);


// Reference (non primitive)
// 3 Types : Array , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga"];
// console.log(heros);  // object

let myObj = {
    name : "Raghav",
    age : 21
}
// console.log(typeof myObj);  //object


const myFunction = function(){
    console.log("Hello World");
}
// console.log(typeof myFunction);  //function


// https://262.ecma-international.org/5.1/#sec-11.4.3