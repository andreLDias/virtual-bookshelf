import React, { useEffect, useState } from 'react'
import { getBooks } from '../../services/api'

export const useSection = (gender) => {
  const [books, setBooks] = useState([])

  const searchBooks = async () => {
    const allBooks = await getBooks(gender)
    setBooks(allBooks.data.items)
  }

  useEffect(() => {
    searchBooks()
  }, [])

  return { books, abc: 'abc' }
}