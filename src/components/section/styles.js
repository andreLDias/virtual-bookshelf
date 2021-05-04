import styled from 'styled-components'

export const SectionContainer = styled.div`
  background-color: ${({ featured }) => (featured ? '#47B7ED' : 'white')};
  font-family: Roboto;
  font-weight: 500;
  font-size: 22px;
  line-height: 25px;
  color: ${({ featured }) => (featured ? 'white' : 'black')};
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`

export const MoviesContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`

export const Content = styled.div``
