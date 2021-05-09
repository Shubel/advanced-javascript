const students = [
    {id: 21, name: "Omar Sunny"},
    {id: 31, name: "Maanaaa"},
    {id: 42, name: "Moyouri"},
    {id: 61, name: "DeepJol"}
];

const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);
const bigger = students.filter(s => s.id>30);
console.log(bigger);
const biggerOne = students.find(s => s.id>30);
console.log(biggerOne);