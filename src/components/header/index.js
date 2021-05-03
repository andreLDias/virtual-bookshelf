
import {
  HeaderContainer,
  SearchSection,
  InitialSection
} from './styles'

import { Search } from '../../assets/svgs/search'
import { Logo } from '../../assets/svgs/logo'

export const Header = () => {
  return (
    <HeaderContainer>
      <InitialSection>
        <Logo />
        Google Livros <Search />
      </InitialSection>

      <SearchSection>

      </SearchSection>
    </HeaderContainer >
  )
}