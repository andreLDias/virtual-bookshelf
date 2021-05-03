
import {
  HeaderContainer,
  SearchSection,
  InitialSection,
  GoogleWrapper
} from './styles'

import { Search } from '../../assets/svgs/search'
import { Logo } from '../../assets/svgs/logo'

export const Header = () => {
  return (
    <HeaderContainer>
      <InitialSection>
        <GoogleWrapper>
          <Logo />
        Google Livros
        </GoogleWrapper>
        <Search />
      </InitialSection>

      <SearchSection>

      </SearchSection>
    </HeaderContainer >
  )
}