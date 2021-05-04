import { useState } from "react"

export const useMainPage = () => {
  const [searchValue, setSearchValue] = useState()
  const [startSearch, setStardSearch] = useState(false)

  const handleSearch = (element) => setSearchValue(element)

  const handleStartSearch = (condition) => setStardSearch(condition)

  const handleKeyDownValue = async (event) => {
    if (event.key === 'Enter' && searchValue) {
      handleStartSearch(true)
    } else {
      handleStartSearch(false)
    }
  }

  return {
    handleSearch,
    searchValue,
    handleKeyDownValue,
    startSearch,
    handleStartSearch
  }
}