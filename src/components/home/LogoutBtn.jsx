import { signOutUser } from "../../firebase/auth";
import { useNavigate} from "react-router-dom";

const LogoutBtn = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser().then(() => { navigate('/login')}).catch((err) => console.log(err))
    }

    return(
        <div className="">
            <button 
                className="rounded-2xl hover:bg-teal-800 text-white text-3xl font-bold p-3 border-2 mr-10"
                onClick={handleSignOut}
            >
                LOGOUT
            </button>
        </div>
    )
}

export default LogoutBtn;