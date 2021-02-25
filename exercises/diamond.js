"use strict";

/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.

PROBLEM STATEMENT:
Given a letter, output a diamond shape. Given a letter, it prints a diamond starting with 'A', with the supplied letter at the widest point.

EXPECTED INPUT: A single char

EXPECTED OUTPUT: a string in the shape of a diamond

EDGE CASES:
  - A outputs A
  -
  -

RULES (make sure to check for things not explicitly stated):
  - The first row contains one 'A'.
  - The last row contains one 'A'.
  - All rows, except the first and last, have exactly two identical letters.
  - The diamond is horizontally symmetric.
  - The diamond is vertically symmetric.
  - The diamond has a square shape (width equals height).
  - The letters form a diamond shape.
  - The top half has the letters in ascending order.
  - The bottom half has the letters in descending order.
  - The four corners (containing the spaces) are triangles.

QUESTIONS:

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:
input: C

  A
 B B
C   C
 B B
  A

   0  1  2
  [A, B, C]
  length of array: 3
  current index: 1
  (3 - 1) - 1 = 1


  [B, A]


EXAMPLE:
input is E
    A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A

    ["A", "   B", "  C", " D", "E"]
    L: 5
    CI: 1
    (5 -1) - 1 = 3 spaces infront of B

    L: 5
    CI: 2
    (5 - 1) - 2 = 2 spaces infront of C



EXAMPLE:

------------------Data Structures and Algorithm--------------------
  Diamond class:
  - constructor: takes no args 
    - sets topHalf to an empty array
    - set bottomHalf to empty array
    - set leadingSpacesPerLine return value of setLeadingSpacesForTopHalf 


  static property alphabet: is an array of chars 
  
  static method makeDiamond: takes a single letter
  - generate all the letters that make up the diamond
  - add the correct number of spaces and new lines in the topHalf array between each duplicate
  - add the correct number of spaces and new lines in the bottomHalf array between each duplicate
  -
  -
  -
  -
  -

  instance method setTopHalf: takes the given char 
  - get the index of the input char plus 1
  - set topHalfChars to the slice of the alphabet array starting form 0 to index
  - reassign topHalf to be topHalfChars

  instance method setBottomHalf: takes top half
  - reverse a copy of topHalf
  - remove the first elment
  - assign it to bottonHalf

  instance method setLeadingSpacesForTopHalf: no args 
  - set leadingSpaces to an empty array
  - set maxIndex to be the length of the array - 1
  - for each element in topHalf push maxIndex - current index to the leadingSpacesPerLine
  - return leadingSpaces

  instance method setInnerSpacesForTopHalf: no args 
  - for each element in the topHalfArray map to an new array
    - set leadingChar to split the element into an array 
    - append index number of spaces to the end
    - join leadingChar
    - return leadingChar
*/
//---------------------------Code with Intent------------------------


class Diamond {
  static ALPHABET = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];

  static makeDiamond(targetLetter) {
    return new Diamond().makeDiamond(targetLetter);
  }

  constructor() {
    this.topHalf = null;
    this.bottomHalf = null;
    this.leadingSpacesCount = [];
    this.innerSpaceCount = [];
  }

  makeDiamond(targetLetter) {
    this.setTopHalf(targetLetter);
    this.setLeadingSpacesForTopHalf();
    this.setInnerSpacesForTopHalf();
    this.addDuplicates(targetLetter);
    this.setBottomHalf();

    this.printTopHalf();
    this.printBottomHalf();

  


  }

  printTopHalf() {
    this.topHalf.forEach(line => console.log(line));
  }

  printBottomHalf() {
    this.bottomHalf.forEach(line => console.log(line));
  }

  setBottomHalf() {
    this.bottomHalf = this.topHalf.slice().reverse();
    this.bottomHalf.shift();
  }

  setTopHalf(targetLetter) {
    this.topHalf = this.getTopHalfLetters(targetLetter);
  }

  getTopHalfLetters(targetLetter) {
    let endSliceIndex = Diamond.ALPHABET.indexOf(targetLetter) + 1;
    return Diamond.ALPHABET.slice(0, endSliceIndex);
  }

  setLeadingSpacesForTopHalf() {
    this.setLeadingSpaces();

    this.topHalf = this.topHalf.map((char, currentIndex) => {
      let space = " ";
      let spaceCount = this.leadingSpacesCount[currentIndex];

      return space.repeat(spaceCount) + char;
    });
  }

  setLeadingSpaces() {
    let maxIndex = this.topHalf.length - 1;

    for (let index = 0; index < this.topHalf.length; index++) {
      this.leadingSpacesCount.push(maxIndex - index);
    }
  }

  setInnerSpaceCount() {
    let maxLineNumber = this.topHalf.length;
    let number = 0;

    while (this.innerSpaceCount.length < maxLineNumber) {
      if (number === 0 || number % 2 !== 0) {
        this.innerSpaceCount.push(number)
      }
      number += 1;
    }
  }

  setInnerSpacesForTopHalf() {
    this.setInnerSpaceCount();

    this.topHalf = this.topHalf.map((line, currentIndex) => {
      let space = " ";
      let spaceCount = this.innerSpaceCount[currentIndex];

      return line + space.repeat(spaceCount);
    });
  }

  addDuplicates(targetLetter) {
    let finalizedTopHalf = [];
    let topHalfLetters = this.getTopHalfLetters(targetLetter);
    topHalfLetters = topHalfLetters.map(letter => letter);

    for (let index = 0; index < this.topHalf.length; index++) {
      if (index === 0) {
        finalizedTopHalf.push(this.topHalf[index]);
      } else {
        finalizedTopHalf.push(this.topHalf[index] + topHalfLetters[index])
      }
    }
    this.topHalf = finalizedTopHalf;
  }
}

Diamond.makeDiamond("Z")

module.exports = Diamond;