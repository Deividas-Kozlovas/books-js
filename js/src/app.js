import { displayBooks } from "./components/DisplayBooks.js";
import { addCategoriesToFormOptions } from "./components/AddCategories.js";
import { getFilteredBooks } from "./helpers/filterBooks.js";
import { sortAndDisplayBooks } from "./helpers/sortBooks.js";
import { findMostExpensiveBook } from "./utils/mostExpensiveBook.js";
import { findCheapestBook } from "./utils/cheapestBook.js";
import { calculateInventoryValue } from "./utils/countInventoryValue.js";
import { clearFilters } from "./utils/cliearFilter.js";
import { books } from "./data/booksData.js";

(() => {
  displayBooks(books);
  addCategoriesToFormOptions(books);

  const filterForm = document.querySelector("#filterForm");
  const sortSelect = document.querySelector("#sortOptions");
  const mostExpensiveBook = document.querySelector("#mostExpensiveBook");
  const cheapestBook = document.querySelector("#cheapestBook");
  const calculateInventoryValaue = document.querySelector(
    "#calculateInventoryValaue"
  );
  const clearFilter = document.querySelector("#clearFilter");
  const closeInventory = document.querySelector("#closeInventory");

  if (filterForm) {
    filterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const filteredBooks = getFilteredBooks();
      displayBooks(filteredBooks);
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      const filteredBooks = getFilteredBooks();
      sortAndDisplayBooks(filteredBooks, e.target.value);
    });
  }

  if (mostExpensiveBook) {
    mostExpensiveBook.addEventListener("click", () => {
      const filterBooks = getFilteredBooks();
      const expensiveBook = findMostExpensiveBook(filterBooks);
      displayBooks(expensiveBook);
    });
  }

  if (cheapestBook) {
    cheapestBook.addEventListener("click", () => {
      const filterBooks = getFilteredBooks();
      const cheapBook = findCheapestBook(filterBooks);
      displayBooks(cheapBook);
    });
  }

  if (calculateInventoryValaue) {
    calculateInventoryValaue.addEventListener("click", () => {
      calculateInventoryValue(books);
    });
  }

  if (clearFilter) {
    clearFilter.addEventListener("click", () => {
      clearFilters();
      displayBooks(books);
    });
  }
})();
