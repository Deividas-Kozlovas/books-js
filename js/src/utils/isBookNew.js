export function isBookNew(bookYear) {
  const currentYear = new Date().getFullYear();
  return bookYear === currentYear ? "NEW" : bookYear;
}
