const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

const parts = numbers.slice(2, 6);
console.log(parts);
console.log(numbers);

const delate = numbers.splice(1, 3);
console.log(delate);
console.log(numbers);

const together = numbers.join(", ");
console.log(together);
console.log(numbers);