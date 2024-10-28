import { books } from "./booksData.js";

(() => {
  displayBooks(books);

  const filterForm = document.getElementById("filterForm");

  filterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const bookTitle = filterForm.querySelector("#bookTitle").value;
    const bookCategory = filterForm.querySelector("#bookCategory").value;
    const bookPages = filterForm.querySelector("#bookPages").value;

    console.log("Book Title:", bookTitle);
    console.log("Book Category:", bookCategory);
    console.log("Maximum Pages:", bookPages);

    const formData = { bookTitle, bookCategory, bookPages };
  });

  addCategoreisToFormOptions(books);

  function addCategoreisToFormOptions(books) {
    const bookCategorySelect = filterForm.querySelector("#bookCategory");
    books.forEach((book) => {
      const option = document.createElement("option");
      option.value = book.category;
      option.textContent = book.category;
      bookCategorySelect.appendChild(option);
    });
  }

  function displayBooks(books) {
    const booksCategories = document.querySelector("#books");

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
        <strong>Pavadinimas:</strong> ${individualBook.title} <br>
        <strong>ISBN:</strong> ${individualBook.ISBN} <br>
        <strong>Leidybos metai:</strong> ${individualBook.year} <br>
        <strong>Puslapių skaičius:</strong> ${individualBook.pages} <br>
        <strong>Kiekis:</strong> ${individualBook.quantity} <br>
        <strong>Kaina:</strong> ${individualBook.price}
        `;
        booksList.appendChild(bookItem);
      });

      booksCategorieCard.appendChild(booksList);
      booksCategories.appendChild(booksCategorieCard);
    });
  }

  function isBookNew(bookYear) {
    const currentYear = new Date().getFullYear();
    return bookYear === currentYear ? "NEW" : bookYear;
  }

  function totalValue(quantity, price) {
    return (price * quantity).toFixed(2);
  }
})();
