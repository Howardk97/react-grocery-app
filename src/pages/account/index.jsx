import Account from "../../components/account/Account"
import Navbar from "../../components/home/Navbar";

const AccountPage = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 min-h-screen">
                <div className="m-0 p-0">
                    <Navbar />
                </div>
                <div className="flex justify-center items-center pt-48">
                    <Account />
                </div>
            </div>
        </>
    )
}

export default AccountPage;