import axios from 'axios'

class UserService {
  setToken(token) {
    if (!token) {
      throw new Error('Token is null or undefined')
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  async list() {
    try {
      const users = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`)
      return users.data
    } catch (error) {
      console.error('Error listing users:', error)
      throw error
    }
  }

  async get(id) {
    try {
      const user = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/${id}`)
      return user.data
    } catch (error) {
      console.error(`Error getting user ${id}:`, error)
      throw error
    }
  }

  async create(data) {
    throw new Error("Not implemented")
  }

  async delete(id) {
    throw new Error("Not implemented")
  }

  async update(id, data) {
    throw new Error("Not implemented")
  }
}

export default UserService
