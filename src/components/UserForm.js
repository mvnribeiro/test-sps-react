import { useState, useEffect } from 'react'
import './UserForm.css'

function UserForm({ initialData, onSubmit, extraActions }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    type: 'user',
  })

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label>Senha:</label>
        <input
          type="password"
          name="password"
          value={formData.password || ''}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label>Tipo:</label>
        <select
          name="type"
          value={formData.type || 'user'}
          onChange={handleChange}
          className="form-input"
        >
          <option value="admin">admin</option>
          <option value="user">user</option>
        </select>
      </div>
      <div className="buttonContainer">
        <button type="submit" className="button">Salvar</button>
        {extraActions}
      </div>
    </form>
  )
}

export default UserForm
