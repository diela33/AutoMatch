import api from './api'

export async function getAllCars() {
  try {
    const response = await api.get('/data/cars')
    return response.data
  } catch (error) {
    console.error('Грешка при зареждане на автомобилите:', error)
    throw error
  }
}
