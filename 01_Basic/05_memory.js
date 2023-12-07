//Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "vineet";
let anotherName = myYoutubeName;
anotherName = "gupta";
console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email : "vineet@mail",
    upi : "user@axl"
}

let userTwo = userOne;

userTwo.email = "vineetGupta@mail.com";

console.log(userOne.email);
console.log(userTwo.email);