"use strict";

function createLibrary() {
  let booksOnShelf = [];
  let booksCheckedOut = [];
  let patrons = [];


  return {
    addBook(title) {
      booksOnShelf.push(title);
    },

    checkOutBook(title) {
      console.log(`${title} has been checked out`);
      booksCheckedOut.push(title);
      booksOnShelf.splice(booksOnShelf.indexOf(title), 1);
    },

    returnBook(title) {
      this.addBook(title);

    },

    listCheckedOutBooks() {
      const checkedOut = true;

      console.log("These are the books that have been checked out:");
      this._listBooks(checkedOut);
    },

    listAvailableBooks() {
      console.log("These are the books available in the library");
      this._listBooks();
    },

    registerPatron() {

    },

    _listBooks(listCheckedOut = false) {
      if(listCheckedOut) {
        booksCheckedOut.forEach(title => console.log(title));
      } else {
        booksOnShelf.forEach(title => console.log(title));
      }
    }
    
  };
}

let MLKLibrary = createLibrary();
MLKLibrary.addBook("Harry Potter");
MLKLibrary.addBook("The Dictionary");

MLKLibrary.listAvailableBooks();

console.log();

MLKLibrary.checkOutBook("Harry Potter");
console.log();

MLKLibrary.listAvailableBooks();
console.log();
MLKLibrary.listCheckedOutBooks();

