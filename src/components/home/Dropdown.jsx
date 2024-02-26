import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Dropdown () {
    const [isActive, setIsActive] = useState(false);

    const toggleBtn = () => {
        setIsActive(!isActive);
    }

    const items = ["Produce", "Dairy", "Canned", "Pasta", "Bread", "Meat", "Snacks", "Frozen"];

    return (
        <div className="relative mx-auto">
            <div 
                className="mx-2 py-3.5 px-5 bg-gray-700 bg-opacity-40 justify-between text-white cursor-pointer flex items-center w-48 rounded-xl text-2xl" 
                onClick={toggleBtn}
            >
                <h1 className="font-bold">Category</h1>
                {isActive ? (
                    <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                    <FontAwesomeIcon icon={faAngleDown} />
                )}
            </div>
            {isActive && (
                <div className="absolute top-[100%] p-2.5 bg-white text-gray-600 mx-2 mt-0 w-48 rounded-xl">
                    {items.map((item, index) => {
                        return (
                            <div key={index} className="dropdown-item p-2.5 hover:bg-gray-700 hover:bg-opacity-40 hover:text-white cursor-pointer transition-all text-xl">
                                {item}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Dropdown;