import LoginForm from '../../components/login/LoginForm';
import './login.css';

const LoginPage = () => {
    return (
        <div className="login-main">
            <div className='flex justify-center h-screen items-center'>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;