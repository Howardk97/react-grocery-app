import Navbar from "../../../components/home/Navbar";
import PreviousLists from "../../../components/home/previousLists";

const PreviousListsPage = () => {
    return(
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 h-screen">
            <Navbar />
            <PreviousLists />
        </div>
    )
}

export default PreviousListsPage;