import React, { useState } from 'react';
import 'App.css';


function App() {

    const [newItem, setNewItem] = useState("");
    const [items, setitems] = useState([]);


    function addItem() {

        if (!newItem) {
            alert("Enter an item")
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        };

        setitems(oldList =>[...oldList, item]);
        setNewItem(""),      
    }


    return (
        <div className='container'>
            <div className='App'>
                {<h1>Todo List</h1>}


                <input
                    type="text"
                    placeholder="Add an item"
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}


                />
                <button onClick={() => addItem()}>Add</button>



                <ul>
                    <li>Tomar un rico Late</li>
                    <li>Hacer la cama</li>
                    <li>regar las plantas</li>

                </ul>



            </div>

        </div>
    )
}

export default App;
