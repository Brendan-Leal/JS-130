/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
-If any part of the problem is unclear, ask for clarification. -Do I
need to return the same object or an entirely new one?

PROBLEM STATEMENT:
Write a program that, given a natural number and a set of one or more other numbers, can find the sum of all the multiples of the numbers in the set that are less than the first number. If the set of numbers is not given, use a default set of 3 and 5.

EXPECTED INPUT: a number

EXPECTED OUTPUT: number

RULES: EXPLICIT
    - use a default set of 3 and 5.
    -
    -
  IMPLICIT (What's not stated in the problem?)
    -
    -
    -

QUESTIONS:
-
-
-
-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLES
if we list all the natural numbers up to, but not including, 20 that are multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18. The sum of these multiples is 78.

all the multiples of 3 less than 20
3, 6, 9, 12, 15, 18, 
all the multiples of 5
5, 10, 15

EXample:
10
3, 6, 9, 
5, 
3 + 6 + 9 + 5 = 23

15 (4, 6)
4, 8, 12
6, 12

------------------Data Structures and Algorithm--------------------
Class SumOfMultiples: 
  - constructor method: takes an unknown amount of number agrs to get multiples of. Could be no args
  - set multiplesOf to be the array [3, 5]
  - if the length of arguments passed into the constuctor is > 0 reassign multiplesOf to be an array of arguments
  - set collectionOfMultiples to an empty array

- to instance method: takes 1 number
  - iterate over each number in the multiplesOf array
  - set currentCollection to be an empty array
    - Loop: numbing at n = 1; increment n by 1 while it is less than the input number
      if n * the current number is < the input number then push the product to the empty array
  - concatonate currentCollection to collectionOfMultiples 
  - Filter out any repeats in the collectionOfMultipes array
  - return the sum of the collectionOfMultiples array
- to static method: 
   creates a new instance of sumOfMultiples and calls the to instance method
-
-
-
-
-
-
-
*/
//---------------------------Code----------------------------------


class SumOfMultiples {
  static to = function (upperLimit) {
    return new SumOfMultiples().to(upperLimit);
  }

  constructor(...args) {
    this.collectionOfMultiples = [];
    this.multiplesOf = args.length > 0 ? args : [3, 5];
  }

  to(upperLimit) {
    this.multiplesOf.forEach(number => {
      let currentCollection = [];

      for (let numb = 1; numb < upperLimit; numb++) {
        let multiple = numb * number;
        if (multiple < upperLimit) {
          currentCollection.push(multiple);
        }
      }
      this.collectionOfMultiples = this.collectionOfMultiples.concat(currentCollection);
    });

    this._filterOutDuplicates();

    return this.collectionOfMultiples.reduce((accum, curr) => accum + curr, 0);
  }

  _filterOutDuplicates() {
    this.collectionOfMultiples = this.collectionOfMultiples.filter((number, index, self) => self.indexOf(number) === index);
  }
}


module.exports = SumOfMultiples;
