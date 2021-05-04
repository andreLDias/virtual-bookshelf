import { screenSizeHelper } from '../../helpers/screenSizeHelper'
import { BookWrapper } from '../bookWrapper'
import { useSection } from './hooks'
import {
  SectionContainer,
  MoviesContainer,
  Title,
  Content
} from './styles'


export const Section = ({ gender, featured, search }) => {
  const { books, windowDimensions } = useSection({ gender, search })
  const width = windowDimensions.width
  const booksToShow = screenSizeHelper({ width: width, books })
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
