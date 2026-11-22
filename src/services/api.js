import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const responseMessage = error.response?.data?.message
    const dataMessage =
      typeof error.response?.data === 'string' ? error.response.data : null

    const apiError = new Error(
      responseMessage || dataMessage || error.message || 'Неочаквана HTTP грешка.',
    )

    apiError.status = error.response?.status
    apiError.originalError = error

    return Promise.reject(apiError)
  },
)

export default api
