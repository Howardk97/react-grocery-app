import HomePage from './pages/home';
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import PreviousListsPage from './pages/home/previousLists'
import { AuthProvider } from './contexts/authContext';
import { useRoutes } from 'react-router-dom'

export default function App() {
  const routesArray = [
    {
      path: "*",
      element: <LoginPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/home/create-list",
      element: <HomePage />
    },
    {
      path: "/home/previous-lists",
      element: <PreviousListsPage />
    }
  ]
  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <div>{routesElement}</div>
    </AuthProvider>
  )
}
