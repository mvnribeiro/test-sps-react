import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Users from './pages/Users'
import UserEdit, { userLoader } from './pages/UserEdit'
import SignIn from './pages/SignIn'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: '/users',
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: '/users/:userId',
        element: (
          <ProtectedRoute>
            <UserEdit />
          </ProtectedRoute>
        ),
        loader: userLoader,
      },
    ],
  },
])

export default router