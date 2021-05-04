import { BookWrapper } from '../bookWrapper'
import { useSection } from './hooks'
import {
  SectionContainer,
  MoviesContainer,
  Title,
  Content
} from './styles'


export const Section = ({ gender, featured }) => {
  const { books, windowDimensions } = useSection(gender)
  let booksToShow = books
  if (windowDimensions.width >= 1200) {
    booksToShow = books
  } else if (windowDimensions.width < 1200 && windowDimensions.width >= 900) {
    booksToShow = books.slice(3)
  } else if (windowDimensions.width < 900 && windowDimensions.width >= 600) {
    booksToShow = books.slice(6)
  } else if (windowDimensions.width < 600 && windowDimensions.width >= 500) {
    booksToShow = books.slice(7)
  } else if (windowDimensions.width < 500) {
    booksToShow = books.slice(9)
  }
  return (
    <>
      {booksToShow && !!booksToShow.length && (
        <SectionContainer featured={featured}>
          <Title>{gender}</Title>
          <MoviesContainer>
            {booksToShow.map(book => {
              return (
                <Content>
                  <BookWrapper
                    url={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    bookPreviewLink={book.volumeInfo.previewLink}
                  />
                </Content>
              )
            })}
          </MoviesContainer >
          {!booksToShow && (
            <Content>Request error</Content>
          )}
        </SectionContainer>
      )}
    </>
  )
}
