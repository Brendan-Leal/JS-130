"use strict";

/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.

PROBLEM STATEMENT:
Write a program that can generate the lyrics of the 99 Bottles of Beer song. See the test suite for the entire song.

EXPECTED INPUT:

EXPECTED OUTPUT:

EDGE CASES:
  -
  -
  -

RULES (make sure to check for things not explicitly stated):
  Standard verse:
  - X bottles of beer on the wall, X bottles of beer. Take one down and pass it around, X - 1 bottles
  of beer on the wall.
  - If 1 bottle of beer left use singular bottle
  - if 0 bottles left use no more
  -
  -

QUESTIONS:

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:



EXAMPLE:



EXAMPLE:

------------------Data Structures and Algorithm--------------------
BeerSong class:
  constructor: no args
  set beerCount to 99


  verse instance method: takes at min 1 arg optional 2nd arg
  - log the verse with beerCount
  - decrement beerCount by 1
  - log the verse with beerCount - 1
  - If beer count equals zero print no more
  -
  -
*/
//---------------------------Code with intent------------------------

class BeerSong {
  static verse(verseStartLine,) {
    return new BeerSong().verse(verseStartLine);
  }

  static verses(verseStartLine, verseEndLine) {
    let result = [];
    while (verseStartLine >= verseEndLine) {
      result.push(new BeerSong().verse(verseStartLine));
      result.push("\n")
      verseStartLine -= 1;
    }
    result.pop();
    return result.join("");
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }

  constructor() {
    this.bottleCount = 99;
    this.singleBottle = "bottle";
    this.pluralBottles = "bottles";
    this.noMore = "no more";
  }

  verse(verseStartLine) {
    let count = verseStartLine;
    let bottle = this.pluralBottles;
    let takeDown = "one";

    if (count === 0) {
      count = this.noMore;
    } else if (count === 1) {
      bottle = this.singleBottle;
    }

    let firstSentance = `${count} ${bottle} of beer on the wall, ${count} ${bottle} of beer.\n`;
    let firstCharInFirstSentance = firstSentance.split("")[0];

    if (Number.isNaN(Number(firstCharInFirstSentance))) {
      firstCharInFirstSentance = firstCharInFirstSentance.toUpperCase();

      let sentanceArray = firstSentance.split("");
      sentanceArray.shift();
      firstSentance = firstCharInFirstSentance + sentanceArray.join("");
    }

    count -= 1;

    let secondSentance;

    if (count === 0) {
      count = this.noMore;
      takeDown = "it";
      bottle = this.pluralBottles;
      secondSentance = `Take ${takeDown} down and pass it around, ${count} ${bottle} of beer on the wall.\n`;
    } else if (count === 1) {
      bottle = this.singleBottle;
      secondSentance = `Take ${takeDown} down and pass it around, ${count} ${bottle} of beer on the wall.\n`;
    } else if (Number.isNaN(count)) {
      count = 99;
      secondSentance = `Go to the store and buy some more, ${count} bottles of beer on the wall.\n`
    } else {
      secondSentance = `Take ${takeDown} down and pass it around, ${count} ${bottle} of beer on the wall.\n`;
    }
    return firstSentance + secondSentance;
  }
}


console.log(BeerSong.lyrics());


module.exports = BeerSong;
