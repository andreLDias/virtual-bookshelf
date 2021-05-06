
import {
  BookContainer,
  Title,
  Thumbnail
} from './styles'


export const BookWrapper = ({ url, title, bookPreviewLink }) => {
  const notFoundImg = 'https://www.mhlontlolm.gov.za/img/departments/municipalmanager/no_image.png'
  return (
    <BookContainer>
      <Thumbnail img={url || notFoundImg} onClick={() => window.open(bookPreviewLink, '_blank')} />
      <Title>{title.length > 25 ? `${title.substring(0, 25)}...` : title}</Title>
    </BookContainer >
  )
}