"use strict";

/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.

PROBLEM STATEMENT:
Create a clock that is independent of date.

You should be able to add minutes to and subtract minutes from the time represented by a given clock object. Two clock objects that represent the same time should be equal to each other.

You may not use any built-in date or time functionality; just use airthmetic operations.

EXPECTED INPUT:

EXPECTED OUTPUT:

EDGE CASES:
  - midnight 00:00 
  -
  -

RULES (make sure to check for things not explicitly stated):
  - 24 hr clock
  - Two clock objects that represent the same time should be equal to each other.
  - Should be able to wrap time foward and backwards. If the time is 23:59 and you add 1 min. then it wraps to 00:00. Likewise if the time is 14:00 and you subtract 120 min. then the clock should wrap to 12:00
  -
  -
  -

QUESTIONS:

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:
10 => 10:00



EXAMPLE:

10:00
can add 1-59 min without having to wrap
anything greater than 59 min we have to wrap

10:00 add 60 => 11:00

10:00 add 182 => 
182 / 60 = 3 R2

10:00 add 5 =>
rounded down 5 / 60 = 0
so add no hours


23:50 add 200 => 02:10

200 / 60 = 3
200 % 60 = 20

23 + 1 = 24 so wrap to 00
00 + 1 = 01
01 + 1 = 02

50 + 20 = 70
70 min - 60 = 10

EXAMPLE:
23:50 add 239 => 
add 3hrs and 59 min

hoursToAdd: 3hrs = 239 / 60
minutesToAdd: 59min = 239 % 60 
--------------------------------

currentMinutes: 50
minutesToAdd: 109 = 50 + 59

minutesToAdd is greater than 59, so break down minutes again

minutesToAdd: 109
109min is 1hr and 49min
currentMinutes: 49 = 109 % 60
hoursToAdd: 4 = 3 + (109 / 60)

final Time is : 03:49 



EXAMPLE:

------------------Data Structures and Algorithm--------------------

  Clock class: creates clock objects
    - constructor: Takes NO args
      - set time to null
      - set maxHour to 23
      - set maxMin to 59
      - set currentHour to null
      - set currentMin to null

  at STATIC Method: Takes 1 or 2 numbers as arguments, returns clock object

  toString INSTANCE method: returns the time as a string 

  add INSTANCE method: adds X amount of minutes to the current time in the clock object, return a new clock object
  - Takes 1 arg minutesToAdd
    increment the currentMinutes by 1
      - if the currentMinutes is equal to 60
        - set the currentMinute to 0
        - increment the currentHour
          - if the currentHour is equal to 24
            set the currentHour to 0

  subtract instance method: subtracts X amount of minutes from the curent time. 
  - opposite of add method

  isEqual instance method: takes a clock object as an arg, returns true if two clock objects that have the same time
  - if calling clocks time is equal to arg clock's time return true


*/
//---------------------------Code with Intent------------------------

class Clock {
  static MAX_HOUR = 24;
  static MAX_MINUTES = 60;
  static MIN_MINUTES = 0;
  static MIN_HOUR = 0;

  constructor(hour, minutes = 0) {
    this.time = null;
    this.currentHour = hour;
    this.currentMinutes = minutes;
  }

  static at(hour, minutes) {
    return new Clock(hour, minutes);
  }

  toString() {
    this.currentHour = String(this.currentHour);
    this.currentMinutes = String(this.currentMinutes);

    if (this.isSingleDigit(this.currentHour)) {
      this.currentHour = this.addLeadingZeroTo(this.currentHour);
    }

    if (this.isSingleDigit(this.currentMinutes)) {
      this.currentMinutes = this.addLeadingZeroTo(this.currentMinutes)
    }

    this.time = this.currentHour + ":" + this.currentMinutes;
    return this.time;
  }

  add(minutesToAdd) {
    while (minutesToAdd > 0) {
      this.currentMinutes += 1;

      if (this.currentMinutes === Clock.MAX_MINUTES) {
        this.currentMinutes = 0;
        this.currentHour += 1;
        if (this.currentHour === Clock.MAX_HOUR) {
          this.currentHour = 0;
        }
      }
      minutesToAdd -= 1;
    }
    return new Clock(this.currentHour, this.currentMinutes);
  }

  subtract(minutesToSubtract) {
    while (minutesToSubtract > 0) {
      this.currentMinutes -= 1;

      if (this.currentMinutes < Clock.MIN_MINUTES) {
        this.currentMinutes = 59;
        this.currentHour -= 1;
        if (this.currentHour < Clock.MIN_HOUR) {
          this.currentHour = 23;
        }
      }
      minutesToSubtract -= 1;
    }
    return new Clock(this.currentHour, this.currentMinutes);
  }

  isEqual(otherClock) {
    return this.toString() === otherClock.toString();
  }

  isSingleDigit(unitOfTime) {
    return unitOfTime.length === 1;
  }

  addLeadingZeroTo(unitOfTime) {
    return unitOfTime = "0" + unitOfTime;
  }  
}

let test1 = Clock.at(13,7).subtract(15);
// let test2 = Clock.at(5,23)

// console.log(test1.isEqual(test2));



console.log(test1.toString());
module.exports = Clock;