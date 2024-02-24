import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { registerUser } from "../../firebase/auth";
import { Navigate } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password");
    const [passwordLogo, setPasswordLogo] = useState(faEye);
    const [confirmPasswordLogo, setConfirmPasswordLogo] = useState(faEye);

    const { userLoggedIn } = useAuth();

    const handleHideShowPassword = () => {
        if(passwordType === "password") {
            setPasswordType("text");
            setPasswordLogo(faEyeSlash);
        } else {
            setPasswordType("password");
            setPasswordLogo(faEye);
        }
    }

    const handleHideShowConfirmPassword = () => {
        if(confirmPasswordType === "password") {
            setConfirmPasswordType("text");
            setConfirmPasswordLogo(faEyeSlash);
        } else {
            setConfirmPasswordType("password");
            setConfirmPasswordLogo(faEye);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            setErrorMsg("Passwords do not match.")
        }

        if(!isRegistering) {
            setIsRegistering(true);
            await registerUser(email, password).catch((err) => {
                if(err.code === "auth/email-already-in-use") {
                    setErrorMsg("Email already in use. Try logging in!")
                } else {
                    setErrorMsg("Oops! Something went wrong. Refresh and try again later.")
                }
            })
        }
    }

    return(
        <>
            {userLoggedIn && (<Navigate to={"/home"} replace={true} />)}
            <div className="border-2 py-20 px-5 rounded-3xl backdrop-blur-2xl">
                <p className="text-5xl text-white font-bold mb-5">Grocery List App</p>
                <form 
                    className="flex flex-col justify-center items-center"
                    onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <input 
                            type="text"
                            className="border-2 p-3 rounded-2xl w-64 text-xl" 
                            placeholder="Enter your Email..." 
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="my-5">
                        <div 
                            className="w-56 py-3 absolute translate-x-full"
                            onClick={handleHideShowPassword}
                        >
                            <FontAwesomeIcon icon={passwordLogo}/>
                        </div>
                        <input 
                            type={passwordType}
                            className="border-2 p-3 rounded-2xl w-64 text-xl" 
                            placeholder="Enter your Password..." 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <div 
                            className="w-56 py-3 absolute translate-x-full"
                            onClick={handleHideShowConfirmPassword}
                        >
                            <FontAwesomeIcon icon={confirmPasswordLogo}/>
                        </div>
                        <input 
                            type={confirmPasswordType}
                            className="border-2 p-3 rounded-2xl w-64 text-xl" 
                            placeholder="Confirm your Password..."
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-5">
                        <button className="border-2 p-3 rounded-2xl bg-cyan-400 bg-opacity-100 text-xl hover:bg-cyan-300 active:bg-cyan-300 text-white w-64" type="submit">SIGN IN</button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <p className="text-white text-xl mt-10">Already have an account? <a href="/login" className="font-bold hover:underline active:underline hover:text-cyan-400 active:text-cyan-400">Login!</a></p>
                </div>
                <div className="flex justify-center">
                    <p className="text-red-500 font-bold">{errorMsg}</p>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;