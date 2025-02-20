import { useEffect, useState } from 'react'
import userService from '../services/UserService'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import UserList from '../components/UserList'

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

  return <UserList users={users} />
}

export default Users
