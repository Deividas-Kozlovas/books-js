export function findMostExpensiveBook(books) {
  const mostExpensiveBook = books
    .flatMap((category) => category.books)
    .reduce((maxBook, currentBook) =>
      currentBook.price > maxBook.price ? currentBook : maxBook
    );

  return books
    .map((category) => ({
      ...category,
      books: category.books.filter((book) => book === mostExpensiveBook),
    }))
    .filter((category) => category.books.length > 0);
}
