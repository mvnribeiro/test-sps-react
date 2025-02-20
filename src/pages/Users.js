import { useEffect, useState } from 'react'
import UserService from '../services/UserService'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const userService = new UserService()

function Users() {
  const [users, setUsers] = useState([])
  const { pageReady } = useContext(AuthContext)
  
  useEffect(() => {
    async function loadUsers() {
      const users = await userService.list()
      setUsers(users)
    }
    loadUsers()
  }, [])
  
  if (!pageReady) {
    return null
  }

  return (
    <div>
      <h1> Usuários</h1>
      <div>Lista de usuários</div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default Users
