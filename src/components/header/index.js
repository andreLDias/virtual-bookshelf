import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Search } from '../../assets/svgs/search'
import { Logo } from '../../assets/svgs/logo'
import { ArrowBack } from '../../assets/svgs/arrowBack'
import { useHeader } from './hooks'
import {
  HeaderContainer,
  SearchSection,
  Section,
  GoogleWrapper,
  WrapperSearch,
  SearchCompletedText
} from './styles'

export const Header = ({ handleSearch, handleKeyDownValue, startSearch, handleStartSearch }) => {
  const { handleHeaderSection, searchClicked, handleBackButton } = useHeader(handleStartSearch)

  return (
    <HeaderContainer>
      {!searchClicked && (
        <Section>
          <GoogleWrapper>
            <Logo />
        Google Livros
        </GoogleWrapper>
          <WrapperSearch onClick={() => handleHeaderSection()}>
            <Search />
          </WrapperSearch>
        </Section>
      )}

      {searchClicked && !startSearch && (
        <SearchSection>
          <TextField
            id="standard-basic"
            label="Buscar por livros ou autores"
            fullWidth
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDownValue}
            InputProps={{
              endAdornment:
                <InputAdornment position="end" onClick={() => handleHeaderSection()}>
                  <Search />
                </InputAdornment>
            }}
          />
        </SearchSection>
      )}

      {searchClicked && startSearch && (
        <Section>
          <WrapperSearch onClick={() => handleBackButton()}>
            <ArrowBack />
          </WrapperSearch>
          <SearchCompletedText>
            Resultado da busca
            </SearchCompletedText>
        </Section>
      )}
    </HeaderContainer >
  )
}