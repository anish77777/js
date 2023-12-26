//singleton
//const tinderuser = new Object() 
 const tinderuser ={}
 tinderuser.id = "123abc"
 tinderuser.name = "anish"
 tinderuser.isLoggedIn = false

// console.log(tinder);

const regularUser = {
    email: "some@gmail.com",
     fullname: {
        firstname:"anish",
        lastname:"dahal",
    }
}
//console.log(regularUser.fullname.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",3:"v"}

//const obj3 ={obj1,obj2}//double object
//const obj3 = Object.assign({},obj1,obj2)//{}target obj1guaranted result
const obj3= {...obj1,obj2}//SPREAD
console.log(obj3);


const users = [
   {
    id:1,
    email:"h@gmail.com"
   } ,
   {
    id:2,
    email:"h@gmail.com"
   } ,
   {
    id:3,
    email:"h@gmail.com"
   } ,
]//array object
//users[1].email to access
console.log(tinderuser);
console.log(Object.keys(tinderuser));//
console.log(Object.values(tinderuser));//
console.log(Object.entries(tinderuser));//key and value array
console.log(tinderuser.hasOwnProperty('isLogged'));