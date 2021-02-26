"use strict";
let seedrandom = require("seedrandom");
let rng = seedrandom();








/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.

PROBLEM STATEMENT:
Write a program that manages robot factory settings.

EXPECTED INPUT:

EXPECTED OUTPUT:

EDGE CASES:
  -
  -
  -

RULES (make sure to check for things not explicitly stated):
  - When robots come off the factory floor, they have no name. The first time you boot them up, a random name is generated, such as RX837 or BC811.
  - If a robot is reset that means their name gets wiped. The next time you ask, it will respond with a new random name.
  - The names must be random; they should not follow a predictable sequence. 
  - Random names means there is a risk of collisions. Your solution should not allow the use of the same name twice when avoidable.
  - You must install the NPM package named seedrandom for  tests.
  - Names are 2 capital letters follow by 3 digits
  -

QUESTIONS:

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:



EXAMPLE:



EXAMPLE:

------------------Data Structures and Algorithm--------------------
  instance method name: returns the robots randomly generated name (a string). The format of the name is 2 uppercase alphabet characters followed by three digits.
  - If the current instance of Robot doesn't already have a saved name, generate one.
  - If you have to generate a new name, make sure there are no collisions with existing robot names.
  -
  - If the robot already has a name assigned, return that name.
  - If the robot does not yet have a name:
    - Generate a random name (using helper function).
    - Continue generating random names until the class-level collection being used to track names of existing robots does not include the newly generated name.
  - Save the robot's new name.
  - Save the name in the class-level collection used to track in-use names.
  - Return the name.
  
  
  instance method reset: restores the robot to factory functions. This means that any previously existing name for the robot is wiped and a new one must be generated.
  - Remove the current value of the robot's name from the class-level collection that tracks the in-use names of all existing robots.
  - Remove the existing value of the robot's name from the object.
    - A falsy placeholder value might be appropriate
  

  Helper Method to generate name
  - Begin with an empty name string.
  - Generate two random uppercase alphabetic characters and append them to the name string.
    - A helper function might be useful for generating the random letters.
  - Generate three random digits from 0-9 and append them to the name string.
    - A helper function might be useful for generating the random digits.
  - Return the name string.
*/
//---------------------------Code with Intent------------------------


class Robot {
  static usedNames = [];

  constructor() {
    this.nameIsInUse = true;
    this.robotName = this.getRandomName();
    Robot.usedNames.push(this.robotName);
  }

  name() {
    if (this.name) {
      return this.robotName;
    } else {
      this.robotName = this.getRandomName();
    }
  }

  reset() {
    let indexOfName = Robot.usedNames.indexOf(this.robotName);
    Robot.usedNames.splice(indexOfName, 1);
    this.robotName = null;
    this.robotName = this.getRandomName();
  }

  getRandomName() {
    this.nameIsInUse = true;
    let name = "";
   
    while (this.nameIsInUse) {
      for (let letterCount = 1; letterCount <= 2; letterCount++) {
        name += this.getRandomLetter();
      }
  
      for (let digitsCount = 1; digitsCount <= 3; digitsCount++) {
        name += String(this.getrandomNumberInclusive(0, 9));
      }

      if (!Robot.usedNames.includes(name)) {
        this.nameIsInUse = false;
      }      
    }    
    return name;
  }

  getRandomLetter() {
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let max = ALPHABET.length - 1;
    let min = 0;

    return ALPHABET[this.getrandomNumberInclusive(min, max)];
  }

  getrandomNumberInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(rng() * (max - min + 1) + min);
  }
}




module.exports = Robot;