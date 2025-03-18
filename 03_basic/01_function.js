// function sayMyName(){
//     console.log("R");
//     console.log("A");
//     console.log("G");
//     console.log("H");
//     console.log("A");
//     console.log("V");
// }

// sayMyName()
// this is function execution

// sayMyName
// this is function reference
// will not give any output


// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(1,"2");

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result
    return number1+number2
}
const result = addTwoNumbers(5,6)
console.log("result: ", result);


// function loginUserMessage (username){
//     return `${username} is logged in`
// }
// console.log(loginUserMessage("raghav"));
// console.log(loginUserMessage());
// it will give output  ->  "undefined is logged in"


function loginUserMessage (username){
    // if(username===undefined){
    //     console.log("Please enter a username");
    // }
    // Both are same
    if(!username){
        console.log("Please enter a username");
    }
    else{
        return `${username} is logged in`
    }
}
console.log(loginUserMessage());



function loginUserMessage (username = "sam"){  // giving a default value
    if(!username){
        console.log("Please enter a username");
    }
    else{
        return `${username} is logged in`
    }
}
console.log(loginUserMessage("raghav"));
// default value will be overriden if we pass a value