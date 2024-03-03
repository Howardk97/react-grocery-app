import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore"

const CreateList = () => {
    const [listItems, setListItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const listItemsCollectionRef = collection(db, "groceryList");
    const listData = {};

    const createItem = async () => {
        await addDoc(listItemsCollectionRef, {name: newItem, category: newCategory});
        location.reload();
    }

    const handleCategoryChange = (e) => {
        setNewCategory(e.target.value);
    }

    useEffect(() => {
        const getListItems =  async () => {
            const data = await getDocs(listItemsCollectionRef);
            setListItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getListItems();
    }, []);

    const handleClick = (e) => {
       const element = e.target;

       if(element.classList.contains("line-through")) {
            element.classList.remove("line-through");
       } else {
            element.classList.add("line-through")
       }
    }

    listItems.map((item) => {
        // if(!categories.includes(item.category.toUpperCase())) {
        //     categories.push(item.category.toUpperCase());
        // }
        let label = item.category.toUpperCase();
        console.log("LABEL: ", label)
        if(label in listData) {
            listData.label.push(item.name);
        } else {
            Object.assign(listData, {label: []});
        }
    })

    console.log("LIST DATA: ", listData)

    return (
        <div className="flex flex-col">
            <h1 className="text-5xl text-white">Welcome! Add a grocery item</h1>
            <div className="flex mt-10">
                <input 
                    className="py-3.5 px-5 rounded-xl mx-2 w-full text-2xl bg-gray-700 bg-opacity-40 text-white placeholder:text-white border-2" 
                    placeholder="Add an item..."
                    onChange={(e) => {
                        setNewItem(e.target.value)
                    }} 
                />
                {/* <Dropdown onSubmit={getCategory}/> */}
                <input 
                    className="py-3.5 px-5 rounded-xl mx-2 w-full text-2xl bg-gray-700 bg-opacity-40 text-white placeholder:text-white border-2" 
                    placeholder="Category..."
                    onChange={handleCategoryChange} />
                <button 
                    className="border-2 bg-teal-500 opactiy-40 p-2 rounded-xl text-white hover:bg-teal-400 text-2xl font-bold mx-2"
                    onClick={createItem}
                >
                    ADD
                </button>
            </div>
            {listItems.length > 0 && (
                <div className="self-center border-2 p-5 bg-gray-700 bg-opacity-40 rounded-3xl m-24">
                    {" "}
                    {listItems.map((listItem, index) => {
                        return (
                            <div key={listItem.id}>
                                <div className="rounded-xl p-3 text-2xl w-96 text-white" onClick={handleClick}>
                                    {categories.map((category) => {
                                        return (
                                            <div key={category}>
                                                {listItem.category.toUpperCase() === category && (
                                                    <div className="flex flex-col text-white">
                                                        <div>
                                                            <p className="font-bold">{category}</p>
                                                        </div>
                                                        <div className="flex">
                                                            <p> - </p> 
                                                            <p className="pl-2">{listItem.name}</p>
                                                        </div>
                                                    </div>
                                                )}       
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })} 
                    <button className="bg-teal-500 bg-opactiy-20 p-2 rounded-xl text-white hover:bg-teal-400 text-2xl font-bold my-5 mx-3 border-2" >SAVE</button>
                </div>
            )}
        </div>
    )
}

export default CreateList;