import { useState } from "react";
import { signInUser } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
    const { userLoggedIn } = useAuth();

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("")
    const [isSigningIn, setIsSigningIn] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!isSigningIn) {
            setIsSigningIn(true);
            await signInUser(email, password)
        }
    }

    return(
        <div>
            {userLoggedIn && (<Navigate to={"/home"} replace={true} />)}
            <div className="border-2 py-20 px-5 rounded-3xl backdrop-blur-2xl">
                <p className="text-5xl text-zinc-600 font-bold mb-5">Grocery List App</p>
                <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                    <div className="my-5">
                        <input 
                            className="border-2 p-3 rounded-2xl w-64 text-xl" 
                            placeholder="Enter your Email..." 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <input 
                            type="password"
                            className="border-2 p-3 rounded-2xl w-64 text-xl" 
                            placeholder="Enter your Password..." 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-5">
                        <button className="border-2 p-3 rounded-2xl bg-cyan-400 bg-opacity-100 text-xl hover:bg-cyan-300 active:bg-cyan-300 text-white w-64" type="submit">LOGIN</button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <p className="text-white text-xl mt-10">Don't have an account? <a href="/register" className="font-bold hover:underline hover:text-cyan-400 active:underline active:text-cyan-400">Sign Up!</a></p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;