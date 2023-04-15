import React, { useState } from 'react';
import '../../styles/index.css';


function App() {

    const [newItem, setNewItem] = useState("");
    const [items, setitems] = useState([]);

    function addItem() {

        if (!newItem) {
            alert("Enter an item");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        };

        setitems(oldList => [...oldList, item]);
        setNewItem("")     
    };

    function deleteItem(id) {
        const newArray = items.filter(item => item.id !== id);
        setitems(newArray);
    };


    return (
        <div className='container'>

            <div className='App'>
                <h1>Todo List</h1>

            </div>

            <div className='TodoInput'> <input
                type="text"
                placeholder="Add an item"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                />
                <button onClick={() => addItem()}>Add</button>
            </div>

            <div>
                <ul>
                    {items.map(item => {
                        return (
                            <li key={item.id}>{item.value}
                                <button className='delete-boton' onClick={() => deleteItem(item.id)}>X</button>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>        
    )
}

export default App;
