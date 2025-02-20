import { Link } from 'react-router-dom'
import './UserList.css'

function UserList({ users }) {
  return (
    <div className="container">
      <h1 className="header">Lista de usuários</h1>
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
