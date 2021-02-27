"use strict";

/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.

PROBLEM STATEMENT:
construct objects that represent a meetup date
Each object takes a month number (1-12) and a year (e.g., 2021). Your object should be able to determine the exact date of the meeting in the specified month and year. For instance, if you ask for the 2nd Wednesday of May 2021, the object should be able to determine that the meetup for that month will occur on the 12th of May, 2021.


EDGE CASES:
  -
  -
  -

RULES (make sure to check for things not explicitly stated):
  - April, June, September, and November have 30 days.
  - February has 28 in most years, but 29 in leap years.
  - All the other months have 31 days.
  - The first day of the week of the month (DOWM) is always between the 1st and 7th of the month.
  - The second DOWM is between the 8th and 14th of the month.
  - The third DOWM is between the 15th and 21st of the month.
  - The fourth DOWM is between the 22nd and 28th of the month.
  - The fifth DOWM is between the 29th and 31st of the month.
  - The last DOWM is between the 22nd and the 31st of the month depending on the number of days in the month.

  - The descriptors that may be given are strings: 'first', 'second', 'third', 'fourth', 'fifth', 'last', and 'teenth'

  - Date objects take (year, monthIndex, day)

QUESTIONS:

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:
Meetup obj that has 
year: 2013
month: 3-march

asked what is the first monday of that month in that year



EXAMPLE:



EXAMPLE:

------------------Data Structures and Algorithm--------------------

  We create a meetup object and are given the year and month

  day instance method: takes a day of week  and a schedule descriptor, returns the date as a Date object.
  Expected input: a day of the week (e.g., 'Monday' or 'Friday') and schedule descriptor (e.g. 'first', 'last', 'teenth', etc.)
  - Convert the day from a string to a number Sunday - Saturday : 0 - 6
  - Get all the specified days of the week in that month 
  - compare the dates to match the schedule descriptor
  -
  -
  Expected output: Date object as a string 
  



  helper methood that get all the days in a month


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
//---------------------------Code with Intent------------------------

class Meetup {
  static DOW_TO_DAYINDEX = {
    "sunday": 0,
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6
  };

  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
    this.allDatesInMonth = [];
  }

  day(dow, descriptor) { // dow stands for day of the week
    dow = dow.toLowerCase();
    descriptor = descriptor.toLowerCase();

    this.setAllDatesInMonth();

    let allDatesWithMatchingDOW = this.getAllDatesWithMatchingDOW(dow);

    return this.getDateBasedOnDescriptor(descriptor, allDatesWithMatchingDOW);
  }

  getDateBasedOnDescriptor(descriptor, allDatesWithMatchingDOW) {
    let date;

    switch (descriptor) {
      case "first":
        date = allDatesWithMatchingDOW[0];
        break;

      case "second":
        date = allDatesWithMatchingDOW[1];
        break;

      case "third":
        date = allDatesWithMatchingDOW[2];
        break;

      case "fourth":
        date = allDatesWithMatchingDOW[3];
        break;

      case "fifth":
        date = allDatesWithMatchingDOW[4];
        break;

      case "last":
        let indexOfLastDate = allDatesWithMatchingDOW.length - 1;
        
        date = allDatesWithMatchingDOW[indexOfLastDate];
        break;

      case "teenth":
        date = allDatesWithMatchingDOW.find(date => {
          return date.getDate() > 12 && date.getDate() <= 19;
        });
        break;
    }

    if (date) {
      return date;
    } else {
      return null;
    }
  }

  getAllDatesWithMatchingDOW(dow) {
    let dowIndex = Meetup.DOW_TO_DAYINDEX[dow];

    return this.allDatesInMonth.filter(date => {
      if (date.getDay() === dowIndex) {
        return date;
      }
    });
  }

  findDOWIndex(dow) {
    return Meetup.DOW_TO_DAYINDEX[dow];
  }

  setAllDatesInMonth() {
    let day = 1;
    let dateInMonth = new Date(this.year, this.month, day);

    while (dateInMonth.getMonth() === this.month) {
      this.allDatesInMonth.push(dateInMonth);

      day += 1;
      dateInMonth = new Date(this.year, this.month, day);
    }
  }
}

module.exports = Meetup;