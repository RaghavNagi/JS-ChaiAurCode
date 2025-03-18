// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500) );


function calculateCartPrice(val1, val2 , ...num1){
    //  "..." this is rest operator
    return num1
}
console.log(calculateCartPrice(200, 400, 500) );
// some people also use val1 and val2
// in this case the 200 and 400 will not be printed
// rest of the values will be printed in array



function calculateCartPrice(...num1){
    //  "..." this is rest operator
    return num1
}


const user = {
    username: "raghav",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user);
handleObject({
    username: "sam",
    price: 99
})



const myNewArray =[200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800]));
