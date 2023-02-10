export const getErrorTextFromResponse = (errorObj) => {
  return Object.values(errorObj.errors).map((error) => error.message).join('; ')
}