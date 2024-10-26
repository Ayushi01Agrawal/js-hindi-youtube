const name = "ayushi"
const repoCount = 50

// console.log(name + repoCount +"Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ayusiw-uhwbd-ndzj')
console.log(gameName);
console.log(typeof gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('u'));


//slice
const newString = gameName.substring(-8,4)
console.log(newString);

const anotherString = gameName.slice(-11,4)
console.log(anotherString);


//trim
const newStringOne = "  ayushi   "
console.log(newStringOne);
console.log(newStringOne.trim());


//replace
const url = "hhtps://ayushi.com/ayushi%20agrawal"
console.log(url.replace('%20','-'));

console.log(url.includes('ayushi'));


console.log(gameName.split('-'));
















