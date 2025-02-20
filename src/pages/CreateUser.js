import { useNavigate } from 'react-router-dom'
import UserForm from '../components/UserForm'
import userService from '../services/UserService'


function CreateUser() {
  const navigate = useNavigate()

  const handleSubmit = async (formData) => {
    try {
      await userService.create(formData)
      alert('Usuário criado com sucesso!')
      navigate('/users')
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
      alert('Falha ao criar usuário.')
    }
  }

  const initialData = {
    name: '',
    email: '',
    password: '',
    type: 'user',
  }

  return (
    <div className='container'>
      <h1>Criação de Usuário</h1>
      <UserForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  )
}

export default CreateUser
