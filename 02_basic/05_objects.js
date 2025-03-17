// destructuring objects

const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor : instructor} = course

console.log(instructor);



// {
//     "name": "hitesh",
//     "courseName": "JS in english"
//     "price": "free"
// }
//      in json format keys are also string
//      declared in " "


// [
//     {},
//     {},
//     {}
// ]
//      sometimes api result is also in array 