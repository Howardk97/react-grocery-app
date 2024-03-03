import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Dropdown = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [newCategory, setNewCategory] = useState("");

    const toggleBtn = () => {
        setIsActive(!isActive);
    }

    const items = ["Produce", "Dairy", "Canned", "Pasta", "Bread", "Meat", "Snacks", "Frozen"];

    const handleChange = (e) => {
        setNewCategory(e.target.textContent);
    }

    // console.log("CATEGORY: ", newCategory)

    console.log("NEW CATEGORY ", newCategory)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("NEW CATEGORY: ", newCategory)
        props.onSubmit(newCategory);
    }

    return (
        <div>
            <form className="relative mx-auto z-0" onSubmit={handleSubmit}>
                <div 
                    className="mx-2 py-3.5 px-5 bg-gray-700 bg-opacity-40 justify-between text-white cursor-pointer flex items-center w-48 rounded-xl text-2xl border-2" 
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
                                <div 
                                    key={index} 
                                    className="dropdown-item p-2.5 hover:bg-gray-700 hover:bg-opacity-40 hover:text-white cursor-pointer transition-all text-xl"
                                    onClick={handleChange}
                                >
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                )}
            </form>
        </div>
    )
}

export default Dropdown;