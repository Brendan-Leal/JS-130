"use strict";

/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem-----------------------
THINGS TO CONSIDER:
  -If any part of the problem is unclear, ask for clarification.

PROBLEM STATEMENT:
create a singly linked list whose elements may contain a range of data such as the numbers 1-10. Provide functions to reverse the linked list and convert a linked list to and from an array.


RULES (make sure to check for things not explicitly stated):
  - We'll be making a singly linked list. This means that each element in the list does not need to have information about any other element in the list except for the next element.
  - Each element in the list contains data (a value) and a next field that points to the next element in the list of elements.
  - The elements of our linked list may contain any data values.
  - We'll need a method that reverses a linked list, as well as methods that convert a linked list to and from an array.
  - We may need to also write several helper methods.
  -

  - From the test cases shown above, we can see that we need to create two classes: Element and SimpleLinkedList.

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
The Element class 
  - constructor that expects at least one argument. The first argument is the data value to be stored in the newly created element. The second optional argument is another Element object that will be the next element after the newly created element. If it seems odd to you that the more recently created element would be placed before the already-existing element, remember that our linked list is meant to resemble a push-down/pop-off stack. With such stacks, the most recently added (pushed) elements are the ones that get removed (popped) first. They are commonly known as LIFO stacks: Last In, First Out.

  - a method that returns the data value of the Element.

  - a method that returns a boolean that indicates whether the current element is the tail of the list: the last one in the list. The tail element does not have another Element instance stored in the next field.

  - a method that returns the next Element in the linked list. If the current element is the tail, we should return a value indicating the absence of a next element (e.g., null or nil).


SimpleLinkedList class

  - a static method that creates a new SimpleLinkedList instance from a given array argument.

  - a static method that converts a SimpleLinkedList instance into an array. The datum from each link in our list should be an element in the returned array.

  - a method that adds its argument to the list.

  - a method that removes the head of the list (the most recently added item on the list).

  - a method that returns the Element at the head of the list.

  - a method that returns the size of the list.

  - a method that returns a boolean based on whether or not the list is empty.

  - a method that returns the data value of the head element.

  - a method that returns the list but in reverse order.

*/
//---------------------------Code with Intent------------------------

class Element {
  constructor(data, nextElement = null) {
    this.data = data;
    this.nextElement = nextElement;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.nextElement === null ? true : false;
  }

  next() {
    return this.nextElement;
  }
}

class SimpleLinkedList {
  constructor() {
    this.listHead = null;
    this.listSize = 0;
  }

  static fromArray(array = []) {
    let newList = new SimpleLinkedList();

    if (array !== null) {
      array = array.slice().reverse();
      array.forEach(element => {
        newList.push(element);
      });
    }

    return newList;


  }

  toArray() {
    let array = [];
    let nextElement = this.listHead;
    let currentElement = nextElement;

    while (currentElement !== null) {
      array.push(currentElement.datum());

      nextElement = nextElement.next()
      currentElement = nextElement;
    }
    return array;
  }

  push(data) {
    if (this.listHead === null) {
      this.listHead = new Element(data);
    } else {
      this.listHead = new Element(data, this.listHead);
    }
    this.listSize += 1;
  }

  pop() {
    let tempHead = this.listHead;
    this.listHead = this.listHead.next();
    this.listSize -= 1;
    return tempHead.datum();
  }

  head() {
    return this.listHead === null ? null : this.listHead;

  }

  size() {
    return this.listSize;
  }

  isEmpty() {
    return this.listHead === null ? true : false;
  }

  peek() {
    return this.listHead === null ? null : this.listHead.datum()
  }

  reverse() {
    let reversedList = new SimpleLinkedList();
    let nextElement = this.listHead;
    let currentElement = nextElement;

    while (currentElement !== null) {
      reversedList.push(currentElement.datum())

      nextElement = nextElement.next()
      currentElement = nextElement;
    }

    return reversedList;
  }

}

module.exports = { Element, SimpleLinkedList }