import axios from 'axios'

class LoginService { 
  async login (credentials) {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/login`,
      credentials
    )
    return response.data
  }
}

export default LoginService
