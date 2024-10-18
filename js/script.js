import { books } from "./booksData.js";

(() => {
  printBooks(books);

  function printBooks(books) {
    for (const book of books) {
      console.log(`Categoreis:${book.category}`);
      for (const individualBook in book.books) {
        console.log(`Title: ${book.books[individualBook].title}`);
        console.log(`Author: ${book.books[individualBook].author}`);
        isBookNew(book.books[individualBook].year);
        console.log(`ISBM: ${book.books[individualBook].ISBN}`);
        console.log(`Pages: ${book.books[individualBook].pages}`);
        console.log(`Quantity: ${book.books[individualBook].quantity}`);
        console.log(`Price: ${book.books[individualBook].price} \n \n`);
      }
      console.log("-----------------------------------------  \n \n");
    }
  }

  function isBookNew(bookYear) {
    const currentYear = new Date().getFullYear();
    if (bookYear == currentYear) {
      console.log("Year: NEW");
    } else {
      console.log(`Year: ${bookYear}`);
    }
  }
})();
