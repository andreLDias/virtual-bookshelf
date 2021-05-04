import React, { useEffect, useState } from 'react'
import { getBooks } from '../../services/api'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const useSection = ({ gender, search }) => {
  const [books, setBooks] = useState([])
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const searchBooks = async (max = 10) => {
    const allBooks = await getBooks(gender, max)
    setBooks(allBooks.data.items)
  }

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    const range = search ? 40 : 10
    searchBooks(range)
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return { books, windowDimensions }
}