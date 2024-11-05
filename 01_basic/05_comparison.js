// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  //true
// console.log("02" > 1); //true


// console.log(null > 0);  //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

/*  
	1.	console.log(null > 0); // false
	•	When comparing null with a number using the >, <, <=, or >= operators, JavaScript attempts to convert null to a number, which results in 0.
	•	So, null > 0 becomes 0 > 0, which is false.
	2.	console.log(null == 0); // false
	•	The equality operator == (loose equality) does not attempt to convert null to a number here. Instead, null is only equal to undefined (in loose equality).
	•	Since null and 0 are different types and do not convert to each other, null == 0 is false.
	3.	console.log(null >= 0); // true
	•	The >= operator again converts null to a number (0).
	•	So, null >= 0 becomes 0 >= 0, which is true.

Summary

The unusual behavior happens because == does not do numeric conversion for null, while comparison operators (>, <, <=, >=) do convert null to a number. This leads to different outcomes when comparing null against numeric values. */


// console.log(undefined == 0);  //false
// console.log(undefined < 0);   //false
// console.log(undefined > 0);   //false

/*
	1.	console.log(undefined == 0); // false
	•	In JavaScript, undefined is only loosely equal to null but not to any other value, including 0.
	•	Since undefined and 0 do not match in value or type, undefined == 0 evaluates to false.
	2.	console.log(undefined < 0); // false
	•	When comparing undefined to a number (like 0) with <, JavaScript attempts to convert undefined to NaN.
	•	Comparisons with NaN are always false, so undefined < 0 evaluates to false.
	3.	console.log(undefined > 0); // false
	•	Similar to the previous example, undefined converts to NaN, and comparisons with NaN are always false.
	•	Thus, undefined > 0 also evaluates to false.

Summary

Any comparison (<, >, <=, or >=) involving undefined will yield false because undefined converts to NaN, and comparisons with NaN are always false. However, undefined == 0 is also false because undefined is not loosely equal to any number. */



// === "strict check"
//console.log("2" === 2);  //false //data type is different

