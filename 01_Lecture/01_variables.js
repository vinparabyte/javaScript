const accountId = 144553;
let accountEmail = "vineet@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

//accountId = 2; //not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


accountEmail = "hzhz@email.com";
accountPassword = "11111";
accountCity = " New Delhi";
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);