// objects can be declared using two methods
// 1. literal     2. constructor

// singleton
// if we make through constructor it will make singleton objects
// Key Characteristics of Singleton Objects:
// 	1.	Single Instance – Only one instance exists in the entire application.
// 	2.	Global Access – The instance is accessible from anywhere.
// 	3.	Controlled Instantiation – The class itself controls the instance creation, preventing external instantiation.

// Object.create



// objects literal


const mySym = Symbol("key1")



const jsUser = {
    name: "Raghav",
    "full name" : "Raghav Nagi",  // we cant access this value using jsUser.full_name
                                  // we have to use other method
    [mySym] : "key1",  // Syntax to declare symbol in object
    age: 21,
    location: "Patiala",
    email: "raghav81@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);


// console.log(jsUser.full name);  
// we have to use this method using below method
console.log(jsUser["full name"]);


console.log(jsUser[mySym]); // Syntax to access symbol



jsUser.email = "raghav@google.com"
// to change value

// Object.freeze(jsUser)
// we cannot change the value of "jsUser" object now

jsUser.greeting = function(){
    console.log("Hello Js User");   
}
console.log(jsUser.greeting());


jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`);   
}
console.log(jsUser.greetingTwo());
