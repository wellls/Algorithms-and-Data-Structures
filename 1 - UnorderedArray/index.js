import UnorderedArray from './UnorderedArray.js';

const arr = new UnorderedArray();

arr.insert(10);
arr.insert(5);
arr.insert(20);

arr.print(); // [10, 5, 20]

console.log(arr.find(5)); // 1

arr.remove(5);
arr.print(); // [10, 20]