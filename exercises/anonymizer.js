"use strict";

/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.

PROBLEM STATEMENT:
Using OLOO create an Account prototype object that anonymizes user objects on init

EXPECTED INPUT:

EXPECTED OUTPUT:

EDGE CASES:
  -
  -
  -

RULES (make sure to check for things not explicitly stated):
  - The created object should not have access to the function that anonymizes a user other than through the init and reanonymize methods.
  - The function that anonymizes creates a 16 character sequence composed of letters and numbers. 
  - no other method or property should exist on the object returned by the Account prototype object other than the ones specified
  -
  -
  -

QUESTIONS:

-----------------------Examples/ Test Cases------------------------
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLE:



EXAMPLE:



EXAMPLE:

------------------Data Structures and Algorithm--------------------
firstName, email, and password properties are private they can only be accessed via their methods.

init method: takes 4 args, email, password, firstName
 - set displayName property to the return value of generateDisplayName method
 - set the private properties 

reanonymize method: This method generates a new 16 character sequence and reassigns it to the displayName property if the password provided is valid. Returns true if successfully re-anonymized. Returns 'Invalid Password' if the password provided is not valid.
ARGS: a string to represent a password
  - if the inputPassword is the same as the private password property
    - reassign the displayName property to the return value of generateDisplayName

resetPassword method: This method asks the user for a new password and reassigns it to the password property. To reset the password, the user must provide the current password. Returns 'Invalid Password' if the password provided is not valid. Returns true if the password is successfully reset. 
  -
  -
  -

firstName method: This method returns the first name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
  -
  -
  -

lastName method: This method returns the last name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
  -
  -
  -

email method: This method returns the email name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
  -
  -
  -

displayName property: This property returns the displayName — the 16 character sequence.


generateDisplayName: method that generates a 16 character sequence. It's used as the display name of a user.
  - create alphabet string
  - set generatedSequence to an empty string
  - for-loop: that picks a random number form the alphabet 16 times
    - appends the char to generatedSequence
  - return generatedSequence.

*/
//---------------------------Code with Intent------------------------
// const Account = {



//   init(email, password, firstName, lastName) {
//     this.email = email;
//     this.password = password;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.displayName = this._generateDisplayName();

// function reanonymize() {

// }

// function resetPassword() {

// }

// function firstName(inputPassword) {

// } 

// function lastName() {

// }

// function email() {

// }

// function getPassword() {

// }


//   },



// _generateDisplayName() {
//   const ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyz0123456789";
//   const MAX_LENGTH_OF_SEQUENCE = 16;
//   let generatedSequence = "";

//   for (let number = 0; number < MAX_LENGTH_OF_SEQUENCE; number++) {
//     generatedSequence += ALPHANUMERIC[this._getRandomNumber(0, ALPHANUMERIC.length - 1)];
//   }
//   return generatedSequence;
// },

// _getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// },
// };

let Account = (function () {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function isValidPassword(testPassword) {
    return testPassword === userPassword;
  }

  function generateDisplayName() {
    const ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyz0123456789";
    const MAX_LENGTH_OF_SEQUENCE = 16;
    let generatedSequence = "";

    for (let number = 0; number < MAX_LENGTH_OF_SEQUENCE; number++) {
      generatedSequence += ALPHANUMERIC[getRandomNumber(0, ALPHANUMERIC.length - 1)];
    }
    return generatedSequence;
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return {    
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = generateDisplayName();
      return this;
    },

    reanonymize(providedPassword) {
      if (isValidPassword(providedPassword)) {
        this.displayName = generateDisplayName();
        return true;
      } else {
        return "Invalid Password";
      }

    },

    resetPassword(providedPassword, newPassword) {
      if (isValidPassword(providedPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return "Invalid Password";
      }
    },

    firstName(providedPassword) {
      if (isValidPassword(providedPassword)) {
        return userFirstName;
      } else {
        return "Invalid Password";
      }
    },

    lastName(providedPassword) {
      if (isValidPassword(providedPassword)) {
        return userLastName;
      } else {
        return "Invalid Password";
      }
    },

    email(providedPassword) {
      if (isValidPassword(providedPassword)) {
        return userEmail;
      } else {
        return "Invalid Password";
      }
    },
  }
})();

// can this be transformed into a factory function?







// console.log(Account);
let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar);
console.log(fooBar.firstName);                        // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));              // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                        // returns true
console.log(displayName === fooBar.displayName);   // logs false
