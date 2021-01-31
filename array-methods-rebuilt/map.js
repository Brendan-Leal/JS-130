/*
The map method iterates over each element in an array. For each element a call back function is executed and a new value is returned from the callback. The new values are collected and the map method then returns a new array. 
Map takes 2 arguments
  1. The array
  2. The callback function
    - The callback function should return something.
Map needs to collect the values returned from the callback.
*/

function map(array, callback) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray.push(callback(array[index]));
  }
  return newArray;
}








let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]