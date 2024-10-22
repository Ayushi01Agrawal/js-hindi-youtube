
let score = 33
console.log(typeof score);
console.log(typeof(score));

let score1 = "33"
console.log(typeof score1);
console.log(typeof(score1));

// conversion into Number
let score2 = "333aaaaaxsx"
let valueInNumber = Number(score2)
console.log(typeof(valueInNumber));
console.log(valueInNumber);
/* output:
typeof:number
value:nan
 */

let score3=null
let valueInNumber1 = Number(score3)
console.log(typeof(valueInNumber1));
console.log(valueInNumber1);
/* output:
typeof:number
value:0
 */

let score4=undefined
let valueInNumber4 = Number(score4)
console.log(typeof(valueInNumber4));
console.log(valueInNumber4);
/* output:
typeof:number
value:NaN
 */

let score5=true
let valueInNumber5 = Number(score5)
console.log(typeof(valueInNumber5));
console.log(valueInNumber5);
/* output:
typeof:number
value:1
 */


//"33"=> 33
// "33abc"=>NAN
// true=> 1; flase=>0




//conversion into boolean
let isLoggedIn ="ayushi"
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true; 0=>false;
//"aysuhi"=>true

//Conversion Into String
let someNumber=33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)
/* output:
typeof:string
value:33
 */
