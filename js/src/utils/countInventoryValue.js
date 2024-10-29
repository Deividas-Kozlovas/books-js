import { displayInventoryValue } from "../components/DisplayInventoryValue.js";

export function calculateInventoryValue(books) {
  const categoryValues = [];
  let totalInventoryValue = 0;

  books.forEach((category) => {
    const categoryValue = category.books.reduce((acc, book) => {
      const bookValue = book.price * book.quantity;
      return acc + bookValue;
    }, 0);

    categoryValues.push({ category: category.category, value: categoryValue });

    totalInventoryValue += categoryValue;
  });

  displayInventoryValue(categoryValues, totalInventoryValue);
}
