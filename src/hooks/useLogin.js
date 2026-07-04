import { useEffect, useState } from 'react'
import { apiClient } from '../lib/apiClient.js'

const STORAGE_KEY = 'toiletku_user'

const getSavedUser = () => {
  const savedUser = localStorage.getItem(STORAGE_KEY)
  return savedUser ? JSON.parse(savedUser) : null
}

export function useLogin() {
  const [user, setUser] = useState(getSavedUser)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const syncUser = () => {
      setUser(getSavedUser())
    }

    window.addEventListener('toiletku-auth-change', syncUser)

    return () => {
      window.removeEventListener('toiletku-auth-change', syncUser)
    }
  }, [])

  const login = async (credentials) => {
    try {
      setLoading(true)
      setError(null)

      const response = await apiClient.post('/login', credentials)
      setUser(response.user)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(response.user))
      window.dispatchEvent(new Event('toiletku-auth-change'))
      return response.user
    } catch (err) {
      setError(err)
      setUser(null)
      return null
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
    setError(null)
    window.dispatchEvent(new Event('toiletku-auth-change'))
  }

  return { user, loading, error, login, logout }
}
