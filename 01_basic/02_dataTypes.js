"use strict"; //treat all js code as newer version

// alert(3+3) //we are using node js not browser
//alert function can be used in browser


/*
The alert function in JavaScript is used to display a simple,
modal dialog box with a specified message and an “OK” button.
This function is often used for debugging or to quickly show information to the user,
though it’s generally not recommended for production use due to its blocking behavior and lack of styling flexibility.

Basic Syntax

alert("Your message here");

Example Usage

alert("Hello, World!");

Important Notes

	1.	Blocking Behavior: The alert function pauses JavaScript execution until the user closes the alert box.
    This can interrupt user experience, especially if misused in loops or critical paths.
	2.	No Customization: You cannot change the appearance or style of the alert box since it’s a browser-native dialog.
	3.	Better Alternatives: For non-blocking notifications,
    consider using libraries (like SweetAlert, Toastify) or custom modals created with HTML/CSS/JavaScript.

Example in a Function

function greetUser() {
    alert("Welcome to our website!");
}

When this function is called, it will display an alert with the message, “Welcome to our website!”.
*/

// alert function documentation
// https://developer.mozilla.org/en-US/docs/Web/API/Window/alert



console.log(3+3);

let name = "Raghav";
let age = 21;
let isLoggedIn = false;
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value is not assigned
// symbol => unique


// object

console.log(typeof 14);

console.log(typeof name);
console.log(typeof isLoggedIn);
console.log(typeof null);
console.log(typeof undefined);
