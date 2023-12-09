const user = {
    username: "Vineet",
    price: 999,
    isLoggedIn: false,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "vineet"
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username = "vineet"
    console.log(this);
}

// chai()
 
// const addTwo = (num1 , num2) => {
//     return num1 + num2 ;
// }

// const addTwo = (num1,num2) =>  num1 + num2 //implicit return for function

const addTwo = (num1,num2) => ({username: "vineet"})

console.log(addTwo(3,5));

// const myArray = [2,4,24,56,7]