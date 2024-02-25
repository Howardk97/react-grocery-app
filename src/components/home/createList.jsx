import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import { db } from "../../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore"

const CreateList = () => {
    const [listItems, setListItems] = useState([]);
    const [users, setUsers] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [name, setName] = useState("");
    const listItemsCollectionRef = collection(db, "groceryList");
    const usersCollectionRef = collection(db, "users");
    
    const { currentUser } = useAuth();

    // console.log("LIST ITEMS: ", listItems);

    const createItem = async () => {
        await addDoc(listItemsCollectionRef, {item: newItem})
        location.reload();
    }

    useEffect(() => {
        const getListItems =  async () => {
            const data = await getDocs(listItemsCollectionRef);
            setListItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            // console.log("LIST ITEMS: ", listItems)
        }

        getListItems();
    }, []);

    return (
        <div className="flex flex-col">
            <h1 className="text-5xl text-white">Welcome! Add a grocery item</h1>
            <div className="flex my-10">
                <input 
                    className="p-2 border-2 rounded-xl mx-5 w-full text-2xl" 
                    placeholder="Add an item..."
                    onChange={(e) => {
                        setNewItem(e.target.value)
                    }} 
                />
                <button 
                    className="bg-teal-500 bg-opactiy-20 p-2 rounded-xl text-white hover:bg-teal-400 text-2xl font-bold"
                    onClick={createItem}
                >
                    ADD
                </button>
            </div>
            <div className="self-center border-2 p-5 bg-white rounded-3xl m-24">
                {" "}
                {listItems.map((listItem) => {
                    return (
                        <div key={listItem.id}>
                            <div className="bg-white rounded-xl p-3 text-2xl w-96">
                                <div className="flex"> 
                                    <input className="w-5" type="checkbox"/>
                                    <p className="pl-2">{listItem.item}</p>
                                </div>
                            </div>
                        </div>
                    )
                })} 
                <button className="bg-teal-500 bg-opactiy-20 p-2 rounded-xl text-white hover:bg-teal-400 text-2xl font-bold my-5" >SAVE</button>
            </div>
        </div>
    )
}

export default CreateList;