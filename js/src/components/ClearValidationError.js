export function clearValidationErrors() {
  const errorMessageContainer = document.querySelector("#filterError");
  if (errorMessageContainer) {
    errorMessageContainer.innerHTML = ""; // Clear existing error messages
  }
}
