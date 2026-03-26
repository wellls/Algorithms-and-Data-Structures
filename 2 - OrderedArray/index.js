import OrderedArray from "./OrderedArray.js";

const arr = new OrderedArray();

arr.insert(10);
arr.insert(5);
arr.insert(20);
arr.insert(15);

arr.print(); // [5, 10, 15, 20]

console.log(arr.find(15)); // 2

arr.remove(10);
arr.print(); // [5, 15, 20]