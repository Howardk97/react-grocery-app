import Navbar from "../../components/home/Navbar";
import CreateList from "../../components/home/createList";
import { useAuth } from "../../contexts/authContext";
import {Navigate, useNavigate} from "react-router-dom"

const HomePage = () => {
    const { userLoggedIn } = useAuth();
    return (
        <>
            {!userLoggedIn && (<Navigate to={"/login"} replace={true} />)}
            <div>
                <Navbar />
                <CreateList />
            </div>
        </>
    )
}

export default HomePage;