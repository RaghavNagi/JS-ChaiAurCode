// nested scopes

function one(){
    const username = "raghav"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two();   
}
one();


if(true){
    const username = "raghav"
    if(username === "raghav"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);




//   *********  Interesting  *********

addOne(5);
function addOne(num){
    return num +1;
}

addTwo(5) // this will give an error
const addTwo = function(num){
    return num+2
}