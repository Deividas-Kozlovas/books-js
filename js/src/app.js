import { displayBooks } from "./components/DisplayBooks.js";
import { addCategoriesToFormOptions } from "./components/AddCategories.js";
import { getFilteredBooks } from "./helpers/filterBooks.js";
import { sortAndDisplayBooks } from "./helpers/sortBooks.js";
import { books } from "./data/booksData.js";

(() => {
  displayBooks(books);
  addCategoriesToFormOptions(books);

  const filterForm = document.querySelector("#filterForm");
  const sortSelect = document.querySelector("#sortOptions");

  filterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const filteredBooks = getFilteredBooks();
    displayBooks(filteredBooks);
  });

  sortSelect.addEventListener("change", (e) => {
    const filteredBooks = getFilteredBooks();
    sortAndDisplayBooks(filteredBooks, e.target.value);
  });
})();
