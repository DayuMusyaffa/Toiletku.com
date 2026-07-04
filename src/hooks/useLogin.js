import { useState } from 'react'

export function useLogin() {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')

  const login = ({ name, role }) => {
    const nextUser = {
      name: name || 'Petugas ToiletKu',
      role: role || 'Petugas Kebersihan',
    }

    setUser(nextUser)
    setMessage(`Halo ${nextUser.name}, dashboard toilet sudah siap dipantau.`)
  }

  const logout = () => {
    setUser(null)
    setMessage('')
  }

  return { user, message, login, logout }
}
