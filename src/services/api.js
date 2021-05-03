import axios from 'axios'
import { ROOT_URL } from '../constants'
import { history } from '../navigation/history'

const api = axios.create({
  baseURL: ROOT_URL.googleAPI,
})

const transactionId = Math.random().toString(36).substr(2, 9)

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
      logout()
    }
    return Promise.reject(error)
  }
)
