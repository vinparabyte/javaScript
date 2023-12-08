function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}

const result = addTwoNumbers(3,5);

// console.log("Result",result);

function loginUserMessage(userName){
    if(!userName){
        console.log("Please enter a username");
        return 
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Vineet"));

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200,1000,2000));

const user = {
    userName : "Vineet",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    userName: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));


