const marvel_heros = ["thor" , "Ironman" ,"spideman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);  //  [ 'thor', 'Ironman', 'spideman', [ 'superman', 'flash', 'batman' ] ]
//  Add array "dc_heros" as a single element in marvel_heros

// console.log(marvel_heros );


// console.log(marvel_heros[3][1]);
//  to print specific element for 4th element in array


// marvel_heros.concat(dc_heros);
/* 1.	marvel_heros.concat(dc_heros); will create a new array 
with elements from both marvel_heros and dc_heros,
but it does not modify marvel_heros. 
It only returns the combined array, 
so without storing it in a variable, 
this line doesn’t affect the final output.  */

/* 2.	console.log(marvel_heros);
will print marvel_heros as it is,
without any modifications.   */


// const all_heros = marvel_heros.concat(dc_heros);
// combines two array into one
// console.log(all_heros);


// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);
// combines multiple arrays into one


// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const usable_another_array = another_array.flat(Infinity);
//  [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
// console.log(usable_another_array);


// console.log(Array.isArray("Raghav"));  //false because not a array
// console.log(Array.from("Raghav"));  // converts string into array
// [ 'R', 'a', 'g', 'h', 'a', 'v' ]

// console.log(Array.from({name: "Raghav"}));
// had to specify whether to make arrays of keys ar value in object
//[]



// let score1 = 100;
// let score2 = 200;
// let score3= 300;
// console.log(Array.of(score1,score2,score3));
// converts given value into array