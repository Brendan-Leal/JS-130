"use strict";

const PerfectNumber = {
  positiveDivisors: [1],
  aliquoteSum: null,

  classify(number) {
    if (number < 0) {
      throw new Error("Input number is negative");
    }

    this.findPositiveDivisors(number);
    this.aliquoteSum = this.positiveDivisors.reduce((acc, curr) => acc + curr);
   
    if (this.aliquoteSum > number) {
      return "abundant";
    } else if (this.aliquoteSum < number) {
      return "deficient"
    } else if (this.aliquoteSum === number) {
      return "perfect";
    }
  },

  findPositiveDivisors(number) {
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) this.positiveDivisors.push(factor);
    }
  },
};

module.exports = PerfectNumber;



/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
-If any part of the problem is unclear, ask for clarification. -Do I
need to return the same object or an entirely new one?

PROBLEM STATEMENT:
Write a program that can tell whether a number is perfect, abundant, or deficient.

EXPECTED INPUT: A number

EXPECTED OUTPUT: one of the following strings: "perfect", "abundant", or "deficient"

RULES: EXPLICIT
  - Perfect numbers have an Aliquot sum that is equal to the original number.
  - Abundant numbers have an Aliquot sum that is greater than the original number.
  - Deficient numbers have an Aliquot sum that is less than the original number.
  - Prime numbers are always deficient

  - Negative numbers raise an error

  - Aliquot sum: is the sum of the numbers that can be evenly divided into the target number with no remainder, excluding the number itself

QUESTIONS:
-
-
-
-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLES

the positive divisors of 15 are 1, 3, and 5
The aliquote sum is 1 + 3 + 5 = 9;
So 15 is deficient 15 > 9

6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.

28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and 1 + 2 + 4 + 7 + 14 = 28.

15 is a deficient number since its divisors are 1, 3, and 5 and 1 + 3 + 5 = 9 which is less than 15.

24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.

Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.


9
9 / 1 = 9 R0
9 / 2 = 4.5 R1
.
.
.
9 / 8 = 1 R1


------------------Data Structures and Algorithm--------------------
class named PerfectNumber
- constructor: takes no args
  - positiveDivisors array set it to  [1]
  - aliquoteSum set it to null;


- instance method classify: takes one arg which is a number
  - If the input number is < 0 throw an error
  - find all factors of the input number excliding the number itself and push them to the positiveDivisors array
  - sum the positiveDivisors array
  - If the sum is greater than the input number
    - return "abundant"
  - If the sum is less than the input number
    - return "deficient"
  - if the sum is equal to the input number
    - return "perfect"

FIND ALL FACTORS OF A NUMBER:
  for loop starting at 2 (n-1)
  - Given the number n
  - if n divide by 2 returns a remainder of 0 push 2 to the positiveDivisors array


*/

