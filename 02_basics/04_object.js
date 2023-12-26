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

// destructure

const course = {
    coursen:"js in loop",
    price:"999",
    abc:"anish"
}
//course.courseinstructor

const {abc: instructor} = course //destructure
console.log(course.abc);
console.log(instructor);
// json API json formatter
//  {
// "name":"hitesh",
// "coursename":"hsgj",
// "price":"free"
//  }

[
    {},
    {},
    {},
]//json talk api // json API json formatter ramdon user generator
// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }

