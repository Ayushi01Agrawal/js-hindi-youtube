// # There are two types of memory:
// # - Stack and heap
// # Stack memory used in Primitive Data type(iss  me variable ki "copy" milti hai)
// # Heap memory is used in Non-Primitive Data type.(iss var ka "refernce" milta hai)

let myYoutubename ="ayushiagrawaldotcom"

let anothername= myYoutubename
anothername="chaiaurpani"

//stack memory, only copy name change but original one not change.
console.log(anothername);
console.log(myYoutubename);


let userOne ={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="ayushi@gmail.com"
// heap memory, refernce ki value change ho jati hai kyu wo ek object ko refernce kr rhe hai
console.log(userOne.email);
console.log(userTwo.email);



