const numbers = [4, 6, 3, 8, 9];

// const output = [];
// for (let i = 0; i < numbers.length; i ++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }


// function compact:
// function square(element) {
//     return element * element;
// }

// const square = (element) => element * element;

// const square = x => x * x;


// map:
// const result = numbers.map(function(element) {
//     return element * element;
// })

const result = numbers.map(x => x * x);
console.log(result);

// filter:
const bigger = numbers.filter(x => x > 5);
console.log(bigger);

// find:
const isThere = numbers.find(x => x > 5);
console.log(isThere);