// Primitive

// 7 type : String,number,boolean,null,undefined,symbol,BigInt

const score = 100

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false symbol return value is not same

//const bigNumber = 45276254774517256732n
// javascript is a dynamically typed language that the variable types are defined during runtime 
// Reference (non primitive)

// Array,Objects,Function

const heros = ["abc","hjgsdjh","gsg"]
let myObj={
    name:"anish",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}
