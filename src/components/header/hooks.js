import { useState } from "react"

export const useHeader = (handleStartSearch) => {
  const [searchClicked, setSearchClicked] = useState(false)

  const handleHeaderSection = () => {
    setSearchClicked(!searchClicked)
  }

  const handleBackButton = () => {
    handleStartSearch()
    setSearchClicked(!searchClicked)
  }

  return {
    handleHeaderSection,
    searchClicked,
    handleBackButton
  }
}