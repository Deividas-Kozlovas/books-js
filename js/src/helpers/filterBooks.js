import { books } from "../data/booksData.js";

export function getFilteredBooks() {
  const filterForm = document.querySelector("#filterForm");
  const formData = new FormData(filterForm);
  const bookTitle = formData.get("bookTitle").toLowerCase();
  const bookCategory = formData.get("bookCategory");
  const maxPages = parseInt(formData.get("bookPages"), 10);

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
