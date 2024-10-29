export function findCheapestBook(books) {
  const cheapestBook = books
    .flatMap((category) => category.books)
    .reduce((minBook, curentBook) =>
      curentBook.price < minBook.price ? curentBook : minBook
    );

  return books
    .map((category) => ({
      ...category,
      books: category.books.filter((book) => book === cheapestBook),
    }))
    .filter((category) => category.books.length > 0);
}
