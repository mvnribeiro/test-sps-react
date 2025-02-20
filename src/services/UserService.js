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
    try {
      const user = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users`,
        data)
      return user.data
    } catch (error) {
      console.error('Error creating user:', error)
      throw error
    }
  }

  async delete(id) {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/users/${id}`)
    } catch (error) {
      console.error(`Error deleting user ${id}:`, error)
      throw error
    }
  }

  async update(id, data) {
    try {
      const user = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/users/${id}`,
        data)
      return user.data
    } catch (error) {
      console.error(`Error updating user ${id}:`, error)
      throw error
    }
  }
}

const userService = new UserService()

export default userService
