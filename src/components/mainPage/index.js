
import {
  Wrapper
} from './styles'

import { Header } from '../header'
import { Section } from '../section'

export const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Section gender={'Movies'} />
      <Section gender={'Children'} />
      <Section gender={'Trees'} />
      <Section gender={'Featured'} featured />
      <Section gender={'Action'} />
    </Wrapper>
  )
}