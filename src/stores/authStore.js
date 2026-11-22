import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import {
  getUserData,
  loginUser,
  logoutUser,
  registerUser,
} from '../services/authService'

function readSavedUser() {
  const savedUser = localStorage.getItem('user')

  if (!savedUser) {
    return null
  }

  try {
    return JSON.parse(savedUser)
  } catch {
    localStorage.removeItem('user')
    return null
  }
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref(readSavedUser())
  const accessToken = ref(localStorage.getItem('accessToken') || '')
  const isLoading = ref(false)
  const errorMessage = ref('')

  const isAuthenticated = computed(() => Boolean(accessToken.value))

  function saveUserData(userData) {
    user.value = userData
    accessToken.value = userData.accessToken

    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('accessToken', userData.accessToken)
  }

  function clearUserData() {
    user.value = null
    accessToken.value = ''

    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
  }

  function getErrorMessage(error) {
    return error.message || 'Неочаквана грешка.'
  }

  async function register(userData) {
    isLoading.value = true
    errorMessage.value = ''

    try {
      const response = await registerUser(userData)
      saveUserData(response.data)
      return response.data
    } catch (error) {
      errorMessage.value = getErrorMessage(error)
      return null
    } finally {
      isLoading.value = false
    }
  }

  async function login(userData) {
    isLoading.value = true
    errorMessage.value = ''

    try {
      const response = await loginUser(userData)
      saveUserData(response.data)
      return response.data
    } catch (error) {
      errorMessage.value = getErrorMessage(error)
      return null
    } finally {
      isLoading.value = false
    }
  }

  async function logout() {
    isLoading.value = true
    errorMessage.value = ''

    try {
      if (accessToken.value) {
        await logoutUser(accessToken.value)
      }

      clearUserData()
      return true
    } catch (error) {
      errorMessage.value = getErrorMessage(error)
      clearUserData()
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function getUserDataFromServer() {
    if (!accessToken.value) {
      clearUserData()
      return null
    }

    isLoading.value = true
    errorMessage.value = ''

    try {
      const response = await getUserData(accessToken.value)
      user.value = response.data
      localStorage.setItem('user', JSON.stringify(response.data))
      return response.data
    } catch (error) {
      errorMessage.value = getErrorMessage(error)

      if (error.status === 401 || error.status === 403) {
        clearUserData()
      }

      return null
    } finally {
      isLoading.value = false
    }
  }

  function clearError() {
    errorMessage.value = ''
  }

  return {
    user,
    accessToken,
    isAuthenticated,
    isLoading,
    errorMessage,
    register,
    login,
    logout,
    getUserData: getUserDataFromServer,
    clearError,
  }
})
