import styled from 'styled-components'

export const SectionContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${({ featured }) => (featured ? '#47B7ED' : 'white')};
  font-family: Roboto;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
  color: ${({ featured }) => (featured ? 'white' : 'black')};
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.div``

export const Content = styled.div``
