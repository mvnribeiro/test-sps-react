import { useEffect, useState } from 'react'
import { useLoaderData, useParams, useNavigate } from 'react-router-dom'
import userService from '../services/UserService'
import UserForm from '../components/UserForm'

export async function userLoader({ params }) {
  try {
    const user = await userService.get(params.userId)
    return { user }
  } catch (error) {
    console.error('Error loading user:', error)
    return { user: null }
  }
}

function EditUser() {
  const { user: loaderUser } = useLoaderData() || {}
  const params = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(loaderUser)

  useEffect(() => {
    if (!user) {
      userService.get(params.userId)
        .then(fetchedUser => setUser(fetchedUser))
        .catch(error => console.error('Error re-fetching user:', error))
    }
  }, [user, params.userId])

  if (!user) {
    return <div>Carregando usuário...</div>
  }

  const handleSubmit = async (formData) => {
    try {
      await userService.update(user.id, formData)
      alert('Usuário atualizado com sucesso!')
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error)
      alert('Falha ao atualizar o usuário.')
    }
  }

  const handleDelete = async () => {
    if (window.confirm('Deseja realmente excluir o usuário?')) {
      try {
        await userService.delete(user.id)
        alert('Usuário excluído com sucesso!')
        navigate('/users')
      } catch (error) {
        console.error('Erro ao excluir usuário:', error)
        alert('Falha ao excluir usuário.')
      }
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <h1>Edição de Usuário</h1>
      <UserForm 
        initialData={user} 
        onSubmit={handleSubmit}
        extraActions={
          <button 
            type="button" 
            className="form-button delete-button" 
            onClick={handleDelete}
            style={{ marginLeft: '10px', backgroundColor: '#dc3545' }}
          >
            Excluir
          </button>
        }
      />
    </div>
  )
}

export default EditUser
