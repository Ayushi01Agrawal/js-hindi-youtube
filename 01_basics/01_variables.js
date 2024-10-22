//Declares a block-scoped, read-only named constant.
const accountId = 144553  // const variable is not modified 

// accountId=2  // not allowed 


//Declares a block-scoped, local variable, optionally initializing it to a value.
let accountEmail= "ayushi@gmail.com" // best practice to declared


//Declares a variable, optionally initializing it to a value.
var accountPassword = "12345" 
/*
Prefer Not to use var
because of issue in block scope and functional scope
 */


accountCity="Jaipur"

//variable without initialized is undefined 
let accountState;

//examples:
accountEmail="ay@hc.com"
accountPassword="3456789"
accountCity="Benguluru"

console.log(accountId); // way to print variable.

// way to print multiple variables values.
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) 