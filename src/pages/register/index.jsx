import RegisterForm from "../../components/register/RegisterForm";
import './register.css'

const RegisterPage = () => {
    return (
        <div className="register-main">
            <div className='flex justify-center h-screen items-center'>
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage;