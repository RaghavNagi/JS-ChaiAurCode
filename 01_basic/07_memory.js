//  Stack (Primitive) , Heap (Non-Primitive)

let myName = "Raghav Nagi";

let anotherName = myName;
anotherName = "raghavnagi";

console.log(anotherName);
console.log(myName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybi"
}

let userTwo = userOne;

userTwo.email = "raghav@gamil.com";

console.log(userOne.email);
console.log(userTwo.email);
