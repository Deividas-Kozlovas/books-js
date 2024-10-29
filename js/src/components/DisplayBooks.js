import { isBookNew } from "../utils/isBookNew.js";

export function displayBooks(books) {
  const booksCategories = document.querySelector("#books");
  booksCategories.innerHTML = "";

  books.forEach((book) => {
    const booksCategorieCard = document.createElement("div");
    booksCategorieCard.className = "col-md-4 book-card";

    const categoryTitle = document.createElement("h1");
    categoryTitle.textContent = book.category;
    booksCategorieCard.appendChild(categoryTitle);

    const booksList = document.createElement("ul");
    booksList.className = "list-group";

    book.books.forEach((individualBook) => {
      const bookItem = document.createElement("li");
      bookItem.className = "list-group-item";
      bookItem.innerHTML = `
        <strong>Title:</strong> ${individualBook.title} <br>
        <strong>ISBN:</strong> ${individualBook.ISBN} <br>
        <strong>Year:</strong> ${isBookNew(individualBook.year)} <br>
        <strong>Pages:</strong> ${individualBook.pages} <br>
        <strong>Quantity:</strong> ${individualBook.quantity} <br>
        <strong>Price:</strong> $${individualBook.price}
      `;
      booksList.appendChild(bookItem);
    });

    booksCategorieCard.appendChild(booksList);
    booksCategories.appendChild(booksCategorieCard);
  });
}
