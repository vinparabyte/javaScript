// singleton

// object literals

const mySym = Symbol("Key1")
const jsUser = {
    name : "vineet",
    "full Name" : "Vineet Gupta",
    [mySym] : "key123",
    age : 23,
    location : "New Delhi",
    email : "vineet@mail",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Wednesday"]
}



// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);

jsUser.email = "vineet@microsift.com"
// Object.freeze(jsUser)
jsUser.email = "vineet@amazon.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());