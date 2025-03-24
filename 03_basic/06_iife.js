// Immediately Invoked Function Expression (IIFE)


(function one(){
    // named iify
    console.log(`DB CONNECTED`);
})();



//      ()();
// 1st -> Function definition
// 2nd -> Function execution
// ";" semicolon is also necessary in this function


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("raghav");



// An IIFE (Immediately Invoked Function Expression) 
// in JavaScript is a function that runs immediately 
// after it is defined. It is often used to avoid 
// polluting the global scope and to create a 
// private scope for variables.