import LogoutBtn from "./LogoutBtn";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navigation = [
        { 
            id: "Create", 
            name: "CREATE A LIST",
            href:"/home/create-list" 
        },
        {
            id: "Previous", 
            name: "PREVIOUS LISTS",
            href:"/home/previous-lists" 
        }
    ]
    return(
        <div className="flex bg-cyan-400 p-3">
            <h1 className="text-white text-5xl mr-20">LOGO</h1>
            {/* <div className={`flex items-center text-white text-2xl w-96 ml-20 mr-5 hover:text-gray-200 active:text-gray-200`}>
                <a href="/home/create-list">CREATE A LIST</a>
            </div>
            <div className={`flex items-center text-white text-2xl w-96 mx-10 hover:text-gray-200 active:text-gray-200`}>
                <a href="/home/previous-lists">PREVIOUS LISTS</a>
            </div> */}
            {navigation.map((item) => (
                <div key={item.id} className="flex items-center w-full text-3xl font-bold">
                    <NavLink 
                        to={item.href} 
                        className={({isActive}) => {
                            console.log(item.href + " " + isActive)
                            return isActive ? "text-cyan-700" : "text-white";
                        }}
                    >
                        {item.name}
                    </NavLink>
                </div>
            ))}
            <div className="flex justify-end w-full">
                <LogoutBtn />
            </div>
        </div>
    )
}

export default Navbar;