import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import './UserList.css'

function UserList({ users }) {
  const { signOut } = useContext(AuthContext)

  return (
    <div className="container">
      <header className="headerContainer">
        <h1 className="listHeader">Lista de usuários</h1>
        <button className="logoutButton" onClick={signOut}>Logout</button>
      </header>
      <div className="createButtonContainer">
        <Link to="/user/create" className="createButton">
          Criar usuário
        </Link>
      </div>
      {users.map((user) => (
        <div key={user.id} className="userCard">
          <div className="userName">{user.name}</div>
          <div className="userEmail">{user.email}</div>
          <div>
            <Link to={`/users/${user.id}`} className="link">Editar</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserList
