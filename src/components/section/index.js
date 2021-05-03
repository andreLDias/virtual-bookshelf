import { BookWrapper } from '../bookWrapper'
import { useSection } from './hooks'
import {
  SectionContainer,
  MoviesContainer,
  Title,
  Content
} from './styles'

export const Section = ({ gender, featured }) => {
  const { books } = useSection(gender)
  return (
    <SectionContainer featured={featured}>
      <Title>{gender}</Title>
      <MoviesContainer>
        {books && books.map(book => {
          return (
            <>
              <Content>
                <BookWrapper url={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} />
              </Content>
            </>
          )
        })}
        {/* <Title> Genero </Title>

      <Content>
        <BookWrapper url={"https://edit.org/images/cat/book-covers-big-2019101610.jpg"} title={"A"} />
      </Content> */}
      </MoviesContainer >
    </SectionContainer>
  )
}