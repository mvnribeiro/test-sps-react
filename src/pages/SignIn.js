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
    <div>
      <div>
        <h2>
          Sign in
        </h2>
        
        {error && (
          <div>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
