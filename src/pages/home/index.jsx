import LogoutBtn from "../../components/home/LogoutBtn";
import { useAuth } from "../../contexts/authContext";
import {Navigate, useNavigate} from "react-router-dom"

const HomePage = () => {
    const { userLoggedIn } = useAuth();
    return (
        <>
            {!userLoggedIn && (<Navigate to={"/login"} replace={true} />)}
            <div>
                HOME PAGE
                <LogoutBtn />
            </div>
        </>
    )
}

export default HomePage;