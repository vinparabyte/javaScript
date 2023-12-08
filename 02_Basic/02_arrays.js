const marvelHeroes = ["thor","ironman","spiderman"];
const dcHeroes = ["Superman","batman","flash"];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes[3]);

// const heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

const heroes = [...marvelHeroes,...dcHeroes];
// console.log(heroes);

const anotherArray = [1,2,3,[4,5,7],7,[6,7,[4,5]]];

const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

console.log(Array.isArray("vineet"));
console.log(Array.from("vineet"));
console.log(Array.from({name: "vineet"})); // Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));