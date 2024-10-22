const accountId = 144553  // const variable is not modified 
let accountEmail= "ayushi@gmail.com" // best practice to declared
var accountPassword = "12345" 
accountCity="Jaipur"

//variable without initialized is undefined 
let accountState;

// accountId=2  // not allowed 

accountEmail="ay@hc.com"
accountPassword="3456789"
accountCity="Benguluru"

console.log(accountId); // way to print variable.

/*
Prefer Not to use var
because of issue in block scope and functional scope
 */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // way to print multiple variables values.
