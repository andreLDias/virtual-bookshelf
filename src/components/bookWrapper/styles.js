import styled from 'styled-components'

export const BookContainer = styled.div`
  width: 90px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Thumbnail = styled.div`
  width: 90px;
  height: 120px;
  background-image: url(${({ img }) => img});
  background-size: 90px 120px;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
`

export const Title = styled.div`
  font-family: Roboto;
  font-weight: normal;
  font-size: 12px;
  height: 30px;
  align-self: center;
  color: black;
`

