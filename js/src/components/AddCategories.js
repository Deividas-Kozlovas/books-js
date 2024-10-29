export function addCategoriesToFormOptions(books) {
  const filterForm = document.querySelector("#filterForm");
  const bookCategorySelect = filterForm.querySelector("#bookCategory");

  books.forEach((book) => {
    const option = document.createElement("option");
    option.value = book.category;
    option.textContent = book.category;
    bookCategorySelect.appendChild(option);
  });
}
