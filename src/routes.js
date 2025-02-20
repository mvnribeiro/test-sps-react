import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Users from './pages/Users'
import EditUser, { userLoader } from './pages/EditUser'
import CreateUser from './pages/CreateUser'
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
            <EditUser />
          </ProtectedRoute>
        ),
        loader: userLoader,
      },
      {
        path: '/user/create',
        element: (
          <ProtectedRoute>
            <CreateUser />
          </ProtectedRoute>
        ),
      }
    ],
  },
])

export default router