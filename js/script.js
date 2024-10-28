import { books } from "./booksData.js";

(() => {
  displayBooks(books);

  const filterForm = document.getElementById("filterForm");
  const sortSelect = document.getElementById("sortOptions");

  filterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const filteredBooks = getFilteredBooks();
    displayBooks(filteredBooks);
  });

  sortSelect.addEventListener("change", (e) => {
    const filteredBooks = getFilteredBooks();
    sortAndDisplayBooks(filteredBooks, e.target.value);
  });

  function getFilteredBooks() {
    const formData = new FormData(filterForm);
    const bookTitle = formData.get("bookTitle").toLowerCase();
    const bookCategory = formData.get("bookCategory");
    const maxPages = parseInt(formData.get("bookPages"), 10);
    return filterBooks(books, bookTitle, bookCategory, maxPages);
  }

  function filterBooks(books, title, category, maxPages) {
    return books
      .filter((cat) => !category || cat.category === category)
      .map((cat) => {
        const filteredBooks = cat.books.filter(
          (book) =>
            (!title || book.title.toLowerCase().includes(title)) &&
            (!maxPages || book.pages <= maxPages)
        );
        return filteredBooks.length > 0
          ? { category: cat.category, books: filteredBooks }
          : null;
      })
      .filter(Boolean);
  }

  function sortAndDisplayBooks(filteredBooks, sortOption) {
    if (sortOption === "title_asc") {
      filteredBooks = filteredBooks.map((cat) => ({
        ...cat,
        books: cat.books.sort((a, b) => a.title.localeCompare(b.title)),
      }));
    } else if (sortOption === "title_dsc") {
      filteredBooks = filteredBooks.map((cat) => ({
        ...cat,
        books: cat.books.sort((a, b) => b.title.localeCompare(a.title)),
      }));
    } else if (sortOption === "price_asc") {
      filteredBooks = filteredBooks.map((cat) => ({
        ...cat,
        books: cat.books.sort((a, b) => a.price - b.price),
      }));
    } else if (sortOption === "price_dsc") {
      filteredBooks = filteredBooks.map((cat) => ({
        ...cat,
        books: cat.books.sort((a, b) => b.price - a.price),
      }));
    }

    displayBooks(filteredBooks);
  }

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
        <strong>Price:</strong> ${individualBook.price}
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
