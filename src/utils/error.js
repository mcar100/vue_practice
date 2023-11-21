export function errorHandler(errorState, error) {
  errorState.isError = true;
  errorState.errorMsg = error.message;
  setTimeout(clearError, 3000, errorState);
}

function clearError(errorState) {
  errorState.isError = false;
  errorState.errorMsg = "";
}
