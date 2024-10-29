export function displayInventoryValue(categoryValues, totalInventoryValue) {
  const table = document.createElement("table");
  table.className = "table";

  const headerRow = document.createElement("tr");
  const categoryHeader = document.createElement("th");
  categoryHeader.textContent = "Category";
  const valueHeader = document.createElement("th");
  valueHeader.textContent = "Total Value";
  headerRow.appendChild(categoryHeader);
  headerRow.appendChild(valueHeader);
  table.appendChild(headerRow);

  categoryValues.forEach((category) => {
    const row = document.createElement("tr");
    const categoryCell = document.createElement("td");
    categoryCell.textContent = category.category;
    const valueCell = document.createElement("td");
    valueCell.textContent = `$${category.value.toFixed(2)}`;
    row.appendChild(categoryCell);
    row.appendChild(valueCell);
    table.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.textContent = "Total Inventory Value";
  const totalValueCell = document.createElement("td");
  totalValueCell.textContent = `$${totalInventoryValue.toFixed(2)}`;
  totalRow.appendChild(totalCell);
  totalRow.appendChild(totalValueCell);
  table.appendChild(totalRow);

  const resultContainer = document.getElementById("inventoryResult");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(table);
}
