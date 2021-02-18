class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
    this.anagrams = [];
  }

  match(potentialAnagrams) {

    potentialAnagrams.forEach(potentialAnagram => {

      if(this.isAnagram(potentialAnagram.toLowerCase())) {
        this.anagrams.push(potentialAnagram);
      }
    });

    this.anagrams = this.anagrams.filter(word => word.toLowerCase() !== this.word);

    return this.anagrams;
  }

  isAnagram(potentialAnagram) {
    let arrayOfChars1 = this.word.split("").sort();
    let arrayOfChars2 = potentialAnagram.split("").sort();

    if (arrayOfChars1.length !== arrayOfChars2.length) {
      return false;
    } else {
      return this.areEqualArrays(arrayOfChars1, arrayOfChars2);
    }
  }

  areEqualArrays(array1, array2) {
    return array1.every((char, index) => char === array2[index]);
  }
}

module.exports = Anagram;


/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
-If any part of the problem is unclear, ask for clarification. -Do I
need to return the same object or an entirely new one?

PROBLEM STATEMENT:
given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana", the program should return a list containing "inlets".

Create a class Anagrams
  - The constructor should initialize the property word with it's argument upon creation.
  - The class should have a method called match that takes an array as input and outputs an array of words that are anagrams to the instance property word. If there is no anagrams return an empty array

EXPECTED INPUT:

EXPECTED OUTPUT:

RULES: EXPLICIT
  - Anagrams are words that that form new words when rearranged.
  - Words must be same in length
      > dog and good are not anagrams
  - Identical words are not anagrams
  - case insensitive
  - No match returns empty anagram
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

listen [inlets, google]
inlets

[ 'e', 'i', 'l', 'n', 's', 't' ], [ 'e', 'i', 'l', 'n', 's', 't' ]
e === e
i === i
.
.
.
t === t
Everything is equal so its an anagram



[ 'e', 'i', 'l', 'n', 's', 't' ],  [ 'e', 'g', 'g', 'l', 'o', 'o' ]
e === e true
i === g false
immediatly move to the next word


------------------Data Structures and Algorithm--------------------
Detecting if 2 words are an anagram
* make sure not to mutate the original values
- split word1 into an array of chars
- split word2 into an array of chars
- sort both arrays alphabetically
- If they are not the same length then they are not anagrams
- If they are the same length
  - Check if the char at the 0th index of word1 is equla to the char at the 0th index of word2
  - Check if the char at the 1st index of word1 is equal to the char at the 1st index of word2
  .
  .
  .
  - If every char at index n in word1 is equal every char at index n in word2 then they are anagrams
  - collect the word


The constructor
  - should initialize the property word with it's argument upon creation.
      - ensure that word is lowercase
  - should initialize the property anagrams with an empty array []


Match method: Takes an array as an argument called potentialAnagrams
- reassign potential anagrams so that every word in the list is lowercase
- Iterate over each word in the potentialAnagrams
  - If current word is an anagram relative to the word then push it to the anagrams array
  - otherwise move to the next word
- Filter out any anagrams in the anagram array that are the same as the original word
-
-
*/
//---------------------------Code----------------------------------


// TEST CASES:
