"use strict";

class Scrabble {
  static POINT_LOOKUP = {
    "1": ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    "2": ["D", "G"],
    "3": ["B", "C", "M", "P"],
    "4": ["F", "H", "V", "W", "Y"],
    "5": ["K"],
    "8": ["J", "X"],
    "10": ["Q", "Z"],
  };

  static score = function (word) {
    let scrabble = new Scrabble(word);

    if (scrabble.isNotAWord()) {
      return scrabble.total;
    } else {
      let arrayOfChars = scrabble.word.split("");

      arrayOfChars.forEach(char => {
        for (const point in Scrabble.POINT_LOOKUP) {
          if (Scrabble.POINT_LOOKUP[point].includes(char.toUpperCase())) {
            scrabble.total += Number(point);
          }
        }
      });
      return scrabble.total;
    }
  }

  constructor(word) {
    this.word = word;
    this.total = 0;
  }

  score() {
    return Scrabble.score(this.word);
  }

  isNotAWord() {
    return this.word === "" || this.word === null || this.isWhiteSpace();
  }

  isWhiteSpace() {
    if (this.word.match(/\s/)) {
      return true;
    } else {
      return false;
    }
  }
}

new Scrabble("quirky").score();
// Scrabble.score("testWord");
// new Scrabble('').score()




module.exports = Scrabble;

/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
-If any part of the problem is unclear, ask for clarification. -Do I
need to return the same object or an entirely new one?

PROBLEM STATEMENT:
Write a program that, given a word, computes the Scrabble score for that word.

A, E, I, O, U, L, N, R, S, T 	   1
D, G 	                           2
B, C, M, P 	                     3
F, H, V, W, Y                    4
K 	                             5
J, X 	                           8
Q, Z 	                          10



EXPECTED INPUT:

EXPECTED OUTPUT:

RULES: EXPLICIT
    - case insensitive
    - If the word is a white space, null, or an empty string the score is 0
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
How to score:
Sum the values of all the tiles used in each word. For instance, lets consider the word CABBAGE which has the following letters and point values:

    3 points for C
    1 point for each A (there are two)
    3 points for B (there are two)
    2 points for G
    1 point for E

3 + 2*1 + 2*3 + 2 + 1
=> 3 + 2 + 6 + 3
=> 5 + 9
=> 14


------------------Data Structures and Algorithm--------------------


Scrabble Class:
  - Create an static property that is an object that hold the worth of each character
    - key is the score/point value is an array of chars
  - constructor: takes a word as an argument
    - initialize property scrabbleWord
    - initialize the property score initial value of 0
  - score Method (static): takes a string as argument
    - if the scrabbleWord is a white space, null, or empty string return score
    - otherwise split the scrabbleWord into an array of chars
    - Iterate over each character
    - For each character iterate over each key in the look up object
    - If the key's value includes the char
      - Convert the key into a number and add it to the score
    - return score
  - score Method (instance): takes no arguments
    - calls static method
-
-
-
-
-
-
-
-
-
-
*/
//---------------------------Code----------------------------------


// TEST CASES:
