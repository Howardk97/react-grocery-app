import { useState } from "react";
import { signInUser } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const LoginForm = () => {
    const { userLoggedIn } = useAuth();

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("")
    const [isSigningIn, setIsSigningIn] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const [passwordLogo, setPasswordLogo] = useState(faEye)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!isSigningIn) {
            setIsSigningIn(true);
            await signInUser(email, password)
        }
    }

    const handleHideShowPassword = () => {
        if(passwordType === "password") {
            setPasswordType("text");
            setPasswordLogo(faEyeSlash);
        } else {
            setPasswordType("password");
            setPasswordLogo(faEye);
        }
    }

    return(
        <div>
            {userLoggedIn && (<Navigate to={"/home"} replace={true} />)}
            <div className="border-2 py-20 px-5 rounded-3xl backdrop-blur-2xl">
                <p className="text-5xl text-white font-bold mb-5">Grocery List App</p>
                <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                    <div className="my-5">
                        <input 
                            className="border-2 p-3 rounded-2xl w-64 text-xl" 
                            placeholder="Enter your Email..." 
                            onChange={(e) => setEmail(e.target.value)}
                        />
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
                    <div className="mt-5">
                        <button className="border-2 p-3 rounded-2xl bg-teal-400 bg-opacity-100 text-xl hover:bg-teal-300 active:bg-teal-300 text-white w-64" type="submit">LOGIN</button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <p className="text-white text-xl mt-10">Don't have an account? <a href="/register" className="font-bold hover:underline hover:text-teal-500">Sign Up!</a></p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;