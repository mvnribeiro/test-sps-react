import { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signIn } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    try {
      await signIn(email, password)
    } catch (err) {
      console.error('Sign in error:', err)
      setError('Sign in failed. Check your credentials.')
    }
  }

  return (
    <div className='container'>
      <h2 className='header'>
        Login
      </h2>
      
      {error && (
        <div>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className='form'>
        <div className='form-group'>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-input'
          />
        </div>
        <button
          type="submit"
          className="button"
        >
          Sign in
        </button>
      </form>
    </div>
  )
}

export default SignIn
