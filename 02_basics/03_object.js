// singleton constuctor
// object declare 2 way literal(not singleton) constuctor
//object literal
//Object.create
const mysym =Symbol("key1")
const jsUser = {
    [mysym]: "mykey1",
    name:"anish",//key name// value anish
    age: 18,
    email:"anish@gmail.com",
    isloggedIn: false,
    "fulname":"jdhkahd",
}
// console.log(jsUser.name)//not good way
// console.log(jsUser["name"]);
// //console.log(jsUser.fulname) not available to acces
// console.log(jsUser["fulname"]);
// console.log(jsUser.mysym)// not a symbol
// console.log(jsUser[mysym])//string//square bracket my key1

jsUser.email = "kjdhskjhd.com"
//Object.freeze(jsUser)
jsUser.email = "change.com"
//sconsole.log(jsUser);//  [Symbol(key1)]: 'mykey1'

jsUser.greeting = function(){
    console.log("hello hi");

}
console.log(jsUser.greeting());//no()function reference[Function (anonymous)]
//[Function (anonymous)]
jsUser.greetingtwo = function(){
    console.log(`hello hi,${this.name}`);//same object reference

}
console.log(jsUser.greetingtwo());




