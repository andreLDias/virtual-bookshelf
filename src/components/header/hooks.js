import { useState } from "react"

export const useHeader = (handleStartSearch) => {
  const [searchClicked, setSearchClicked] = useState(false)

/**
 * @name handleHeaderSection
 * @description set the search button to be clicked or not clicked
 * @function
 */
  const handleHeaderSection = () => {
    setSearchClicked(!searchClicked)
  }

  /**
   * @name handleBackButton
   * @description handle states when user clickes the back button
   * @function
   */
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