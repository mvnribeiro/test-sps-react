import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginService from '../services/LoginService'

export const AuthContext = createContext()

const loginService = new LoginService()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [pageReady, setPageReady] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedUser')

    if (loggedUserJson) {
      try {
        const user = JSON.parse(loggedUserJson)
        setUser(user)
      } catch (error) {
        console.error('Error parsing user data:', error)
        localStorage.removeItem('loggedUser')
      }
    }

    setPageReady(true)
  }, [])

  const signIn = async (email, password) => {
    try {
      const user = await loginService.login({ email, password })

      if (user) {
        localStorage.setItem('loggedUser', JSON.stringify(user))
        setUser(user)
        navigate('/')
        return true
      }
      return false
    } catch (error) {
      console.error('Sign in error:', error)
      throw error
    }
  }

  const signOut = () => {
    localStorage.removeItem('loggedUser')
    setUser(null)
    navigate('/signin')
  }

  return (
    <AuthContext.Provider value={{ user, pageReady, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
