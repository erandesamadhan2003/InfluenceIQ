import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Ranking } from './components/Ranking'
import { Profile } from './components/Profile'
import { Login } from './components/auth/Login'
import { Signup } from './components/auth/Signup'
import { AppLayout } from './components/Layout/AppLayout'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { DashBoard } from './components/DashBoard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/rankings',
        element: <Ranking />
      },
      {
        path: '/profile/:id',
        element: <Profile />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/dashboard',
        element: <DashBoard />  
      }

    ]
  },

])
const App = () => {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
