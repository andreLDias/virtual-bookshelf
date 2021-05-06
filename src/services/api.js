import axios from 'axios'
import { ROOT_URL } from '../constants'
import { history } from '../navigation/history'

const api = axios.create({
  baseURL: ROOT_URL.googleAPI,
})

api.interceptors.request.use(
  async (config) => config,
  (error) => {
    if (error.response.status === 401) {
      history.push('/')
    } else {
      return Promise.reject(error)
    }
  }
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      history.push('/')
    }
    return Promise.reject(error)
  }
)

export const getBooks = async (query, max) => {
  try {
    const response = await api.get(`volumes?q=${query}&startIndex=1&maxResults=${max}`)
    return response
  } catch (err) {
    history.push('/')
    throw err
  }
}