export const screenSizeHelper = ({ width, books }) => {
  let booksToShow
  if (width >= 1200) {
    booksToShow = books
  } else if (width < 1200 && width >= 900) {
    booksToShow = books.slice(1)
  } else if (width < 900 && width >= 600) {
    booksToShow = books.slice(5)
  } else if (width < 600 && width >= 500) {
    booksToShow = books.slice(4)
  } else if (width < 500 && width >= 300) {
    booksToShow = books.slice(6)
  } else if (width < 300 && width >= 200) {
    booksToShow = books.slice(7)
  } else if (width < 200) {
    booksToShow = books.slice(8)
  }
  return booksToShow
}