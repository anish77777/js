//array

const myArr = [0,1,2,3,4,5]
const myHEROES = ['ABC','SPIDEY']

const myArr2 = [9,8,7,6]

//console.log(myArr[1]);


//Array methos

// myArr.push(6)
// myArr.pop()

//myArr.shift()

//myArr.unshift(9)
//unshift insert at array start
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);//string

//slice,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)// doestnot manipulate
console.log(myn1)

console.log("B",myArr);//slice

const myn2 = myArr.splice(1,3)// manipulate original array
console.log(myn2);
console.log("c",myArr)//splice