//singleton object

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userFullName:{
            firstName:"Raghav",
            lastName: "Nagi"
        }
    }
}
// console.log(regularUser.fullname.userFullName);


const obj1 = {1: "a" , 2 : "b"}
const obj2 = {3: "c" , 4 : "d"}

const obj3 = Object.assign({} , obj1, obj2)
// Object.assign(target, source1 , source2 , source3)
// using "{}" is a good practice to merge array
console.log(obj3);


const obj4 = {...obj1 , ...obj2}
console.log(obj4);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// output data type will be array



console.log(tinderUser.hasOwnProperty('isLoggedIn'));
