
import {
  BookContainer,
  Title,
  Thumbnail
} from './styles'


export const BookWrapper = ({ url, title }) => {
  const notFoundImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Forbidden_Symbol_Transparent.svg/1200px-Forbidden_Symbol_Transparent.svg.png'
  return (
    <BookContainer>
      <Thumbnail img={url || notFoundImg} />
      <Title>{title.length > 25 ? `${title.substring(0, 25)} [...]` : title}</Title>
    </BookContainer >
  )
}