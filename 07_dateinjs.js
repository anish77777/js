// DAtes

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date("2023-01-23")
//console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()

//console.log(myTimeStamp);//millisecond
//console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getDate());

//`${newDate.getDay()} and the time `

newDate.toDateString("default",{
weekday : "long",
})