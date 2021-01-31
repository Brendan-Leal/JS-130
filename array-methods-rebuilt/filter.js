/*
Given an array filter out any element that does not pass a given test.
Filter takes 2 argumenst 
  1. the array 
  2. a callback function.
    - The call back function should return a boolean value. 
    - If the return value is true then keep the element
    - If the return value is false then dont keep the element
Filter should return a new array with the correct elements.
*/


function filter(array, callback) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) newArray.push(array[index]);
  }
  return newArray;
}




let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string")); // => [ 'abc', 'xyz' ]