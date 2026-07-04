export const sampleAccount = {
  email: 'petugas@toiletku.id',
  password: 'toilet123',
  user: {
    name: 'Petugas ToiletKu',
    email: 'petugas@toiletku.id',
    role: 'Admin Kebersihan',
  },
}

export const apiClient = {
  get: async (url, options = {}) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://api.toiletku.id'}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Gagal mengambil data ToiletKu.')
    }

    return await response.json()
  },
  post: async (url, body, options = {}) => {
    if (url === '/login') {
      const { email, password } = body || {}

      if (email === sampleAccount.email && password === sampleAccount.password) {
        return {
          success: true,
          user: sampleAccount.user,
        }
      }

      throw new Error(`Email atau password salah. Coba ${sampleAccount.email} / ${sampleAccount.password}`)
    }

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://api.toiletku.id'}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(body),
      ...options,
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Gagal mengirim data ToiletKu.')
    }

    return await response.json()
  },
}
