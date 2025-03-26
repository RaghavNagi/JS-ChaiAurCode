// reduce

const myNums = [1, 2, 3]

const initialValue = 0;

// const myTotal = myNums.reduce(function (acc,currVal) {
//     console.log(`acc: ${acc} and currValue: ${currVal}`);
//     return acc + currVal;
// }, 0)


const myTotal = myNums.reduce( (acc, curr) => acc+curr,0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price , 0)
console.log(priceToPay);
