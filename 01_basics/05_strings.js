const name = "anish"// invoke object 
const repoCount = 50

// console.log(name + repoCount + "Value");
// not readable
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// another way of declaring string
const gameName = new String('anish-hc-hgf')//new= object string constructor

console.log(gameName[0]);
console.log(gameName.__proto__);

// object use
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.indexOf('h'));

const nerstring = gameName.substring(0,3)
console.log(nerstring);

const newStringOne = "   anish    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jsefdkj/gsfjhgasdf"

console.log(url.replace('gsf','gas'));

console.log(gameName.split('-'));