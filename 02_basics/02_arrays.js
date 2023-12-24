const marvel_heroes = ["thor","loki","spiderman"]
const dc = ["superman","flash","batman"]

//marvel_heroes.push(dc)

//console.log(marvel_heroes);//[ 'thor', 'loki', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// //wrong array in aaray
//console.log(marvel_heroes[3][1]);
const allHeroes = marvel_heroes.concat(dc);
//console.log(marvel_heroes);//problematic
//console.log(allHeroes);

const all_new_heros = [...marvel_heroes,...dc]

// console.log(all_new_heros);

const another_Array = [1,2,3,[2,3],7,[6,7,[4,0]]]

const real_another_array = another_Array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("anish"));
console.log(Array.from("anish"));
console.log(Array.from({name:"anish"}))//  empty all value or key

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

