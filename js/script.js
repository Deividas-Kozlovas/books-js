import { books } from "./booksData.js";

(() => {
  printBooks(books);

  function printBooks(books) {
    let totalInventoryValue = 0;

    for (const book of books) {
      console.log(`Categories: ${book.category}`);
      let categoryAllBooksValues = 0;

      for (const individualBook of book.books) {
        const isNew = isBookNew(individualBook.year);
        const booksTotalValue = totalValue(
          individualBook.quantity,
          individualBook.price
        );

        console.log(
          "Title: " +
            individualBook.title +
            "\n" +
            "Author: " +
            individualBook.author +
            "\n" +
            "ISBN: " +
            individualBook.ISBN +
            "\n" +
            "Pages: " +
            individualBook.pages +
            "\n" +
            "Year: " +
            isNew +
            "\n" +
            "Quantity: " +
            individualBook.quantity +
            "\n" +
            "Price: " +
            individualBook.price +
            "$\n" +
            "Total value of this book: " +
            booksTotalValue +
            "$"
        );

        categoryAllBooksValues += parseFloat(booksTotalValue);
      }

      totalInventoryValue += categoryAllBooksValues;

      console.log(
        "Total value of all books in the category: " +
          categoryAllBooksValues +
          "$\n" +
          "Total value of all inventory of " +
          book.category +
          ": " +
          totalInventoryValue +
          "$ \n \n \n \n"
      );
    }
  }

  function isBookNew(bookYear) {
    const currentYear = new Date().getFullYear();
    return bookYear === currentYear ? "NEW" : bookYear;
  }

  function totalValue(quantity, price) {
    return (price * quantity).toFixed(2);
  }
})();
