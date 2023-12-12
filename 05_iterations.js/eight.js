// +++++++++++++++++++++++++REDUCE++++++++++++++++++++++++++++++++++++++++++++

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc,curVal){
//     console.log(`acc: ${acc} and currentValue: ${curVal}`);
//     return acc + curVal
// },0)

const myTotal = myNums.reduce((acc, curVal) => acc + curVal, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "Mobile Dev course",
        price: 1999
    },
    {
        itemName: "Data Science course",
        price: 999
    },
    {
        itemName: "Cpp course",
        price: 699
    }
]

const totalPrice = shoppingCart.reduce((acc,item) => acc+item.price,0)

console.log(totalPrice);
