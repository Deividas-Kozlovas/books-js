import { books } from "../data/booksData.js";
import { validateFilterInputs } from "../utils/validation.js"; // Adjust the path accordingly

export function getFilteredBooks() {
  const filterForm = document.querySelector("#filterForm");
  const formData = new FormData(filterForm);

  const bookTitle = formData.get("bookTitle").toLowerCase().trim();
  const bookCategory = formData.get("bookCategory");
  const maxPagesInput = formData.get("bookPages");
  const maxPages = maxPagesInput ? parseInt(maxPagesInput, 10) : null;

  return filterBooks(books, bookTitle, bookCategory, maxPages);
}

export function filterBooks(books, title, category, maxPages) {
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
