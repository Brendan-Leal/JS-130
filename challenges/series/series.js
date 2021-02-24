"use strict";
/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.

PROBLEM STATEMENT:
Write a program that will take a string of digits and return all the possible consecutive number series of a specified length in that string.

EXPECTED INPUT: number

EXPECTED OUTPUT: 2D array

EDGE CASES:
  - a slice of 1 returns an array where each element is an array with one of the digits
  -
  -

RULES (make sure to check for things not explicitly stated):
  - if you ask for a 6-digit series from a 5-digit string, you should throw an error.
  -
  -
  -
  -
  -

QUESTIONS:

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

For example, the string "01234" has the following 3-digit series:
              0 1 2 3 4
input number: 0 1 2 3 4

012 index 0-2
123 index 1-3
234 index 2-4

Likewise, here are the 4-digit series:

0123
1234


EXAMPLE:

0 1 2 3 4
a b c d e

length of array is 5
5 - 3 = 2

2 is the last index to stop slicing
c d e last subsection



EXAMPLE:

------------------Data Structures and Algorithm--------------------
Class Series: 
  constructor method: takes a number in the form of a string
  -
  slices method: takes 1 arg that tells you what the length of each section should be
    - set result to be an empty array
    - set sequence to the the number transformed into an array

    - for-loop: starting at index 0, ending at the length of the array - arg, incrementing by 1
      slice sequence from starting index to starting index + inputNumber
      push to result
    - return result
  -
  -
  -
  -
  -
*/
//---------------------------Code with Intent------------------------

class Series {
  constructor(number) {
    this.number = number;
  }

  slices(sliceLength) {

    if (sliceLength >= 6 && this.number.length >= 5) {
      throw new Error("Invalid");
    } else {
      let result = [];
      let sequence = this.number.split("").map(digit => Number(digit));

      for (let index = 0; index <= (sequence.length - sliceLength); index++) {
        result.push(sequence.slice(index, index + sliceLength));
      }

      return result;
    }

  }
}

let series = new Series("01234");
console.log(series.slices(1));


module.exports = Series;