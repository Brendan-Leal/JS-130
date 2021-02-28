"use strict";

/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  - If any part of the problem is unclear, ask for clarification.
  - Do your functions or methods only return something or does it only have side effects?

PROBLEM STATEMENT:
implement your own custom set type. 
For simplicity, you may assume that all elements of a set must be numbers.

RULES (make sure to check for things not explicitly stated):
  - behavior must be like a set of unique elements that can be manipulated in several well defined ways.
  -
  -
  -
  -
  -

EDGE CASES:
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
CustomSet Class:
  - constructor: Creates new set objects. Only 1 instance of each value is allowed per a set
    EXPECTED INPUT: an array Default value should be an array
    - initialize setOfValues to the array
    -
    -
    -
    -
    EXPECTED OUTPUT: Custom set objects.

  - Instance Method isEmpty: Returns true if the set is empty, false otherwise
    EXPECTED INPUT: NONE
    - if the setOfValues length is > 0 
      - return false
      - otherwise true
    -
    -
    EXPECTED OUTPUT: True or false

    - Instance Method contains(): returns true if the set contains a given value, false otherwise
    EXPECTED INPUT: A number
    -
    -
    -
    -
    -
    EXPECTED OUTPUT: True or False;

    - Instance Method isSubSet(): Called on a customSet object. Tests if the calling set is a subset of the set passed in as an arg. In other words if all elements of the calling set are contained in the other set. At minimum the calling subset has to have all its elements within the other set even if the other set is bigger than the calling one. Note: an empty set is a subset of non-empty set
    EXPECTED INPUT: Takes a customSet object as arg
    - if the 2 sets are empty return true
    - If every element in the calling set if it is included in the other set return true false otherwise.
    -
    -
    -
    EXPECTED OUTPUT: true or false

    - Instance Method isDisjoint(): 2 sets are considered disjoint if they share no elements. 
    EXPECTED INPUT: customeSet object
    -
    -
    -
    -
    -
    EXPECTED OUTPUT: true or false

     - Instance Method isSame(): Tests to see if 2 seperate sets have the exact same elements and amount of elements. If so they are considered the same. Note: Empty sets are equal
    EXPECTED INPUT: customSet Object
      essentially testing if 2 array are equal. The elements can be in any order. 
    - If the length of setOfValues array is not equal to the length of the other set return false 
    - Sort both arrays numerically
    - if every element from the first array can be found in the same index of the second array they are equal
    -
    EXPECTED OUTPUT: true or false

     - Instance Method add(): unique elements can be added to a set
    EXPECTED INPUT: A number
    -
    -
    -
    -
    -
    EXPECTED OUTPUT: NONE; THIS FUNCTION HAS A SIDE EFFECT

    - Instance Method intersection(): 
    intersection of two empty sets is an empty set
    intersection of an empty set and non-empty set is an empty set
    intersection of a non-empty set and an empty set is an empty set
    intersection of two sets with no shared elements is an empty set
    intersection of two sets with shared elements is a set of the shared elements
    EXPECTED INPUT: customSet Object
    -
    -
    -
    -
    -
    EXPECTED OUTPUT: a set of all shared elements

    - Instance Method difference: If the calling set's element is not found in the other set it is collected into its own customSet object
    difference of two empty sets is an empty set
    EXPECTED INPUT: customSet object
    - create setOfDifferences set it to an new custom set
    - iterate over each element in the calling set's values property
    - If the element is not found in the otherset add it to setOfDifferences
    -
    -
    -
    EXPECTED OUTPUT: customeSet Object

    - Instance Method union(): merges 2 sets together only keeping unique elements.
    EXPECTED INPUT: customSet object
    -
    -
    -
    -
    -
    EXPECTED OUTPUT: customSetObject

*/
//---------------------------Code with Intent------------------------


class CustomSet {
  constructor(values = []) {
    this.values = values;
  }

  isEmpty() {
    return this.values.length === 0;
  }

  contains(value) {
    return this.values.includes(value);
  }

  isSubset(otherSet) {
    return this.values.every(element => {
      return otherSet.values.includes(element);
    });
  }

  isDisjoint(otherSet) {
    return this.values.every(element => {
      return !otherSet.values.includes(element);
    });
  }

  isSame(otherSet) {
    if (this.values.length !== otherSet.values.length) {
      return false;
    } else {
      this.values.sort((a, b) => Number(a) - Number(b));
      otherSet.values.sort((a, b) => Number(a) - Number(b));

      return this.values.every((element, index) => {
        return otherSet.values[index] === element;
      });
    }
  }

  add(element) {
    if (!this.values.includes(element)) {
      return new CustomSet([...this.values, element]);
    } else {
      return this;
    }
  }

  intersection(otherSet) {
    let intersectingSet = new CustomSet();

    this.values.forEach((element) => {
      if (otherSet.values.includes(element)) {
        intersectingSet.values.push(element)
      }
    });

    return intersectingSet;
  }

  difference(otherSet) {
    let setOfDifferences = new CustomSet();

    this.values.forEach(element => {
      if (!otherSet.values.includes(element)) {
        setOfDifferences.values.push(element);
      }
    });
    return setOfDifferences;
  }

  union(otherSet) {
    let unionSet = new CustomSet(this.values);

    otherSet.values.forEach(element => {
      unionSet = unionSet.add(element);
    });

    return unionSet;
  }
}


module.exports = CustomSet;
