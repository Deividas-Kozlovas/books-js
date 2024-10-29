export function clearFilters() {
  document.querySelectorAll("#filterForm input").forEach((input) => {
    input.value = "";
  });

  document.querySelectorAll("#filterForm select").forEach((select) => {
    select.selectedIndex = 0;
  });

  document.getElementById("sortOptions").selectedIndex = 0;
}
