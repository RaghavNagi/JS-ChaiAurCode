const accountId = 144553;
let accountEmail = "raghav@google.com";
var accountPassword = "12345";
accountCity = "Patiala";
let accountState;

// accountId = 2;   //in const we cannot change variable's value
console.log(accountId);

accountEmail = "rn@rn.com";
accountPassword = "54321";
accountCity = "Chandigarh";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


/*In JavaScript, var, let, and const are used to declare variables, but they have different scopes, hoisting behaviors, and mutability characteristics. Here’s a breakdown of each:

1. var

	•	Scope: Function-scoped or globally scoped if declared outside a function. Variables declared with var are accessible throughout the entire function in which they are declared.
	•	Hoisting: Variables declared with var are hoisted to the top of their scope. This means that the declaration is processed before the code is executed, but the initialization is not hoisted.
	•	Re-declaration: You can re-declare a variable declared with var in the same scope without any error.

Example:

function example() {
    console.log(x); // undefined (hoisted)
    var x = 10;
    console.log(x); // 10
}
example();

2. let

	•	Scope: Block-scoped. This means that variables declared with let are only accessible within the nearest enclosing block (i.e., curly braces {}).
	•	Hoisting: Similar to var, variables declared with let are hoisted, but they cannot be accessed until the declaration is reached in the code (this is called the “temporal dead zone”).
	•	Re-declaration: You cannot re-declare a variable with let in the same scope.

Example:

function example() {
    // console.log(y); // ReferenceError (temporal dead zone)
    let y = 20;
    console.log(y); // 20
}
example();

3. const

	•	Scope: Block-scoped, similar to let.
	•	Hoisting: Variables declared with const are also hoisted but have the same “temporal dead zone” as let.
	•	Re-declaration: You cannot re-declare a variable declared with const.
	•	Mutability: Variables declared with const must be initialized at the time of declaration and cannot be reassigned. However, if the variable is an object or an array, its properties or elements can be changed.

Example:

function example() {
    const z = 30;
    // z = 40; // TypeError: Assignment to constant variable.
    console.log(z); // 30
    
    const obj = { key: 1 };
    obj.key = 2; // This is allowed
    console.log(obj.key); // 2
}
example();

Summary

	•	Use var when you need function-scoped variables, but it’s generally recommended to use let and const to avoid issues with scope and hoisting.
	•	Use let for variables that will change, and const for variables that should remain constant throughout their scope.
    */