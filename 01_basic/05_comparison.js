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

/*  This behavior can seem confusing at first glance! Let’s go through each line to clarify why JavaScript evaluates them this way.

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

// === strict check
console.log("2" === 2);
