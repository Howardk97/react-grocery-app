import { useAuth } from "../../contexts/authContext";
import { auth } from "../../firebase/firebase";

const CreateList = () => {
    const { currentUser } = useAuth();
    return (
        <div>
            <h1 className="text-3xl">Welcome {currentUser.email}, add a grocery item</h1>
            <div className="flex justify-between my-10">
                <input className="p-2 border-2 rounded-xl w-96" placeholder="Add an item..." />
                <button className="bg-emerald-500 p-2 rounded-xl text-white">ADD</button>
            </div>
        </div>
    )
}

export default CreateList;