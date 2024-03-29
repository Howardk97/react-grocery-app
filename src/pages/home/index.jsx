import Navbar from "../../components/home/Navbar";
import CreateList from "../../components/home/createList";
import { useAuth } from "../../contexts/authContext";
import {Navigate, useNavigate} from "react-router-dom"

const HomePage = () => {
    const { userLoggedIn } = useAuth();
    return (
        <>
            {!userLoggedIn && (<Navigate to={"/login"} replace={true} />)}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 min-h-screen">
                <div className="m-0 p-0">
                    <Navbar />
                </div>
                <div className="flex justify-center items-center pt-48">
                    <CreateList />
                </div>
            </div>
        </>
    )
}

export default HomePage;