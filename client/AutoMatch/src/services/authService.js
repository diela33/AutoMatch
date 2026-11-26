import api from './api'

export function registerUser(userData) {
  return api.post('/users/register', userData)
}

export function loginUser(userData) {
  return api.post('/users/login', userData)
}

export function logoutUser(accessToken) {
  return api.get('/users/logout', {
    headers: {
      'X-Authorization': accessToken,
    },
  })
}

export function getUserData(accessToken) {
  return api.get('/users/me', {
    headers: {
      'X-Authorization': accessToken,
    },
  })
}
