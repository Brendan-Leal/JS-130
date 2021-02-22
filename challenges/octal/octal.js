/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem----------------------- 
THINGS TO CONSIDER: 
-If any part of the problem is unclear, ask for clarification. -Do I
need to return the same object or an entirely new one?

PROBLEM STATEMENT:
Implement octal to decimal conversion. Given an octal input string, your program should produce a decimal output. Treat invalid input as octal 0.

EXPECTED INPUT: an octal number as a STRING

EXPECTED OUTPUT: a decimal number

RULES: EXPLICIT
    - multiply each digit in the octal number by powers of 8
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

  233 # octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155

------------------Data Structures and Algorithm--------------------
- split the octal number into an array of digits
- reverse the array
- take the first octal digit and multiply it by 8^0
- take the sectond octal digit and multiply it by 8^1
- take the nth octal digit and multiply it by 8^(n-1)
- Sum all product of each previous operation
-
-
-
-
-
-
*/
//---------------------------Code----------------------------------

class Octal {
  constructor(octalNumber) {
    this.octalNumber = octalNumber;
  }

  toDecimal() {
    if (this._isInvalidOctal()) {
      return 0;
    } else {
      let octalDigits = this._toNumberArray().reverse();
      let decimalNumber = this._powersOfEight(octalDigits).reduce((accum, curr) => accum + curr);
      return decimalNumber;
    }
  }

  _isInvalidOctal() {
    let contains8Or9 = false;
    if (this.octalNumber.match(/[89]/)) {
      contains8Or9 = true;
    }
    return !Number.isInteger(Number(this.octalNumber)) || contains8Or9;
  }

  _toNumberArray() {
    return this.octalNumber.split("").map(digit => Number(digit));
  }

  _powersOfEight(octalDigits) {
    return octalDigits.map((digit, index) => {
      return digit * (Math.pow(8, index));
    });
  }
}

let octal = new Octal("1")
console.log(octal.toDecimal());

module.exports = Octal;
