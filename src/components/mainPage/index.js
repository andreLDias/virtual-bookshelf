
import { Wrapper } from './styles'
import { Header } from '../header'
import { Section } from '../section'
import { useMainPage } from './hooks'

export const MainPage = () => {
  const {
    handleSearch,
    searchValue,
    handleKeyDownValue,
    startSearch,
    handleStartSearch
  } = useMainPage()

  return (
    <Wrapper>
      <Header
        handleSearch={handleSearch}
        handleKeyDownValue={handleKeyDownValue}
        startSearch={startSearch}
        handleStartSearch={handleStartSearch}
      />
      {!startSearch && (
        <>
          <Section gender={'Aventura'} />
          <Section gender={'Infantil'} />
          <Section gender={'Destaque'} featured />
          <Section gender={'Ação'} />
        </>
      )}
      {searchValue && startSearch && <Section gender={searchValue} search />}
    </Wrapper>
  )
}