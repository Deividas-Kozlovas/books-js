export function validateFilterInputs() {
  const filterForm = document.querySelector("#filterForm");
  const formData = new FormData(filterForm);

  const bookTitle = formData.get("bookTitle").toLowerCase().trim();
  const bookCategory = formData.get("bookCategory");
  const maxPagesInput = formData.get("bookPages");
  const maxPages = maxPagesInput ? parseInt(maxPagesInput, 10) : null;

  const errorMessageContainer = document.querySelector("#filterError");

  if (errorMessageContainer) {
    errorMessageContainer.innerHTML = "";
  }

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

  if (errors.length > 0) {
    if (errorMessageContainer) {
      errorMessageContainer.innerHTML = errors.join("<br>");
    }
    return false;
  }

  return true;
}
