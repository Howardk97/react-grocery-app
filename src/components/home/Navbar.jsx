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
        <div className="flex bg-gray-700 bg-opacity-40 backdrop-blur-2xl p-3">
            <div className="flex items-center">
                <h1 className="text-white text-5xl mr-20">LOGO</h1>
            </div>
            {navigation.map((item) => (
                <div key={item.id} className="flex items-center whitespace-nowrap text-3xl font-bold mx-2">
                    <NavLink 
                        to={item.href} 
                        className={({isActive}) => {
                            console.log(item.href + " " + isActive)
                            return isActive ? "text-teal-500" : "text-white";
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