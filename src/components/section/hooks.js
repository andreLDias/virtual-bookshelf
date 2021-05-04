import React, { useEffect, useState } from 'react'
import { getBooks } from '../../services/api'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const useSection = (gender) => {
  const [books, setBooks] = useState([])
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const searchBooks = async (max = 12) => {
    const allBooks = await getBooks(gender, max)
    setBooks(allBooks.data.items)
  }

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    searchBooks()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  // useEffect(() => {
  //   if (windowDimensions.width < 1200) {
  //     setBooks(books.slice(4))
  //   } else if (windowDimensions.width < 800) {
  //     setBooks(books.slice(6))
  //   } else if (windowDimensions.width < 500) {
  //     setBooks(books.slice(9))
  //   }
  // }, [windowDimensions])

  return { books, windowDimensions }
}