import HomePage from './pages/home';
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import PreviousListsPage from './pages/home/previousLists'
import { AuthProvider } from './contexts/authContext';
import { useRoutes } from 'react-router-dom'
import AccountPage from './pages/account';

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
      path: "/create-list",
      element: <HomePage />
    },
    {
      path: "/previous-lists",
      element: <PreviousListsPage />
    },
    {
      path: "/account",
      element: <AccountPage />
    }
  ]
  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <div>{routesElement}</div>
    </AuthProvider>
  )
}
