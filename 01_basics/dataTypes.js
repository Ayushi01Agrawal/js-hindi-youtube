/*
There are two types of data types on the basis of memory allocation and access:
1.)Primitive Data Type
2.)Non-Primitive Data Type

#Primitive Data Type (call by value):
--There are 7 data type:
String,Number,Boolean, Null,Undefined,Symbol, Bigint

#Refrence or Non Primitives Data types(call by refernces):
Array, Objects, functions
*/

/* dynamically type vs statically type */


/* js is dynamically typed */



const score = 100
const scoreValue = 100.3

const isLoggedIn= false
const outsidetemp = null
let userEmail; // var is undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 34567345678900000000008765432n



//Non-primitives: "data type of non-primitives is object"

const heros=['shaktiman',"nagraj","doga"]
let myObj={
    name:"ayushi",
    age:22
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);


//Reference to study more about data type:

// https://262.ecma-international.org/5.1/#sec-11.4.3