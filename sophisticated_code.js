/**
 * Filename: sophisticated_code.js
 * 
 * Description: This code demonstrates a sophisticated and elaborate JavaScript program that manages a library system.
 * It includes features like adding, removing, and searching books, maintaining user accounts, handling reservations, etc.
 *
 * Author: Your Name
 * Date: The current date
 */

// Library class represents the library system and manages the books and users
class Library {
  constructor() {
    this.books = [];
    this.users = [];
  }

  // Adds a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Removes a book from the library
  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  // Searches for a book by title or author
  searchBook(query) {
    const result = [];
    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];
      if (
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      ) {
        result.push(book);
      }
    }
    return result;
  }

  // Registers a new user
  registerUser(user) {
    this.users.push(user);
  }

  // Removes a user from the library
  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  // Reserves a book for a user
  reserveBook(user, book) {
    if (!user.hasReserved(book)) {
      user.addReservation(book);
      book.addReservation(user);
    }
  }

  // Cancels a book reservation for a user
  cancelReservation(user, book) {
    user.removeReservation(book);
    book.removeReservation(user);
  }
}

// Book class represents a book in the library
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.reservedBy = [];
  }

  // Adds a user who reserved this book
  addReservation(user) {
    this.reservedBy.push(user);
  }

  // Removes a user from reservations list
  removeReservation(user) {
    const index = this.reservedBy.indexOf(user);
    if (index !== -1) {
      this.reservedBy.splice(index, 1);
    }
  }
}

// User class represents a library user
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.reservedBooks = [];
  }

  // Adds a reserved book to the user's list
  addReservation(book) {
    this.reservedBooks.push(book);
  }

  // Removes a reserved book from the user's list
  removeReservation(book) {
    const index = this.reservedBooks.indexOf(book);
    if (index !== -1) {
      this.reservedBooks.splice(index, 1);
    }
  }

  // Checks if the user has reserved a particular book
  hasReserved(book) {
    return this.reservedBooks.includes(book);
  }
}

// Example usage of the above library system

// Create a new library
const library = new Library();

// Add some books to the library
const book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford");
const book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke");
const book3 = new Book("JavaScript: The Definitive Guide", "David Flanagan");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Create a user account
const user1 = new User("John Doe", "john.doe@example.com");
library.registerUser(user1);

// Search for a book by title or author
const searchResult = library.searchBook("JavaScript");
console.log("Search Result:", searchResult);

// Reserve a book for the user
library.reserveBook(user1, book1);

// Cancel the book reservation
library.cancelReservation(user1, book1);

// Remove a book from the library
library.removeBook(book3);

// Remove the user account
library.removeUser(user1);

// Perform more operations as per the library requirements

// ...


// The above code demonstrates a simple library management system with basic functionalities.
// You can extend it further by adding more features, improving the user interface, implementing a database, etc.
// This code is just a starting point for a sophisticated library system.