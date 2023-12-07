// "use strict"; //treat all JS code as newer version

// // alert(3+3); // we are using nodejs, not browser
// console.log(3 + 3);
// console.log("hello");

// let name = "Vineet";
// let age = 23;
// let isLoggedIn = false;

//Datatypes in JS
/*
Primitive Data Type
number - 2 to power 53,
bigint,
string => "";,
boolean => true/false,
null = standalone value,
undefined = not defined,
symbol = unique
*/

//object

// console.log(typeof undefined); //undefined
// console.log(typeof null);  //object

// Primitive
// 7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// Reference (Non Primitive)
// Array, Objects, Function