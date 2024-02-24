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
                className="bg-red-500 rounded-2xl hover:bg-red-400  active:bg-red-400 text-white text-xl font-bold p-3 border-2"
                onClick={handleSignOut}
            >
                LOGOUT
            </button>
        </div>
    )
}

export default LogoutBtn;