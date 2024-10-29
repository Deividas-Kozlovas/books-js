export function validateFilterInputs(bookTitle, bookCategory, maxPages) {
  const errors = [];

  if (!bookTitle && !bookCategory && !maxPages) {
    errors.push("Please enter at least one filter.");
  }
  if (bookTitle.length > 30) {
    errors.push("Book title cannot exceed 30 characters.");
  }
  if (maxPages > 2000 || maxPages < 0) {
    errors.push("Maximum pages cannot be negative or greater than 2000.");
  }

  return errors;
}
