import { books } from "./booksData.js";

(() => {
  printBooks(books);

  function printBooks(books) {
    for (const book of books) {
      console.log(`Categoreis:${book.category}`);
      let categoryAllBooksValues = 0;
      for (const individualBook in book.books) {
        console.log(`Title: ${book.books[individualBook].title}`);
        console.log(`Author: ${book.books[individualBook].author}`);
        isBookNew(book.books[individualBook].year);
        console.log(`ISBM: ${book.books[individualBook].ISBN}`);
        console.log(`Pages: ${book.books[individualBook].pages}`);
        console.log(`Quantity: ${book.books[individualBook].quantity}`);
        console.log(`Price: ${book.books[individualBook].price}`);

        const booksTotalValue = totalValue(
          book.books[individualBook].quantity,
          book.books[individualBook].price
        );

        console.log(`Total value of all books: ${booksTotalValue} \n \n`);

        categoryAllBooksValues =
          categoryAllBooksValues + parseInt(booksTotalValue);
      }

      console.log(
        `Total value of all books in the category: ${categoryAllBooksValues}`
      );
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

  function totalValue(quantity, price) {
    return (price * quantity).toFixed(2);
  }
})();
