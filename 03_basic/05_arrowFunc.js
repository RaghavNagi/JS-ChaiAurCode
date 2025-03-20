const user = {
    username: "raghav",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}
// this refers to current context

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function one(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// one()



// const two = function () {
//         let username = "hitesh"
//         console.log(this.username);
// }
// two()


const three = () => {
    let username = "hitesh"
    console.log(this.username);
}
// three()

// () => {}
// basic syntax of arrow function

// storing arrow function inside a variable
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// this is implicit return if we have to return one line of code
// const addTwo = (num1, num2) => (num1 + num2);
// if we use "()" we dont have to write return
// if we use "{}"->for multiple line of function  
// we have to write return

// console.log(addTwo(1,2))



const addTwo = (num1, num2) => ({username: "hitesh"});
console.log(addTwo(1,2))