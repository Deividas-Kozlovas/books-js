import { displayBooks } from "../components/DisplayBooks.js";

export function sortAndDisplayBooks(filteredBooks, sortOption) {
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
