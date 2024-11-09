// arrays

const myArr = [0 , 1 , 2 , 3 , 4 , 5];
const myHeroes = ["shaktiman","naagraj"];
const myArr2 = new Array(1,2,3,4);

// console.log(myArr[0]);



// Array methods


// myArr.push(6);  // [0,1,2,3,4,5,6]
// myArr.push(7);  // [0,1,2,3,4,5,6,7]

// myArr.pop();    // [0,1,2,3,4,5,6]

//myArr.unshift(9);  // [9,0,1,2,3,4,5,6]
// It is time consuming ang gives load on computer
// because it shifts every value +1 index

//myArr.shift();  // [0,1,2,3,4,5,6]
// Removes first element in array

//console.log(myArr.includes(9));  // false 
// because 9 not present

//console.log(myArr.indexOf(9));  // -1
// gives -1 if element not present
// otherwise give index of element

// const newArr = myArr.join()   // converts array into the string
// console.log(typeof newArr);   // string





// slice , splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3);
// slice doesn't manipulate original array
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3);
// splice manipulates original array
console.log("C ",myArr);
console.log(myn2);






// console.log(myArr);