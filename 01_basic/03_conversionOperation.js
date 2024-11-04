// let score = "33abc";
// let score = null;
// let score = undefined;
let score = true;
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);   // NaN (Not a Number) // for 33abc for string
                              // 0 for null
                              // Nan for undefined
                              // 1 if true 0 if false in boolean

// "33" => 33
// "33abc" => NaN
// true => 1 ; false = 0

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  //true if 1 flase if 0
                                 //true if string is not empty false if string is empety

// 1 => true : 0 => false
// "" => false
// "abcde" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);