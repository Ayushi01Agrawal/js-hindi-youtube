// Baasic Comparsion and it is best.
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2 !=1);

// comparison with differnt data type, it creates problem and confusion and it gives confused and unpredictable answers.
console.log("2">1);
console.log("02">1);

// Avoid these type of comparsion because it will confused us and give unpredictable result.
console.log(null>0);  // output=false  ; hum pta hi nhi hai "null" kisme convert ho gaa comapre krte time i.e. it can convert into "0" or "nan"
console.log(null==0); // output=false
console.log(null>=0);// output=true

console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined>0);

/* Output is not compatable because:
The REASON is that an equality check == and comparisons 
> < >= <= work differently

Comaprisons convert null to a number , treating it as 0.
That's why (3) null>=0 is true and (1) null>0 is false.
 */

// Strict check : === i.e. it checks number along with data types.
console.log("2"===2);








