import React, { useState } from 'react';
import '../../styles/index.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([
    { id: 1, value: "Hacer la compra" },
    { id: 2, value: "Llamar al médico" },
    { id: 3, value: "Ir al gimnasio" },
    { id: 4, value: "Estudiar para el examen" },
  ]);

  function addItem() {
    if (!newItem) {
      alert("Enter an item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("")
  };

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  };

  const count = items.filter(item => !item.completed).length;

  return (
    <div className='container'>
      <div className='App'>
        <h1>Todo List</h1>
      </div>
      <div className='TodoInput'>
        <input
          type="text"
          placeholder="Add an item"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <button className='ButtonAdd' onClick={() => addItem()}>Add</button>
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
        <div>
          <p className='contenedor' id='LeftItem'>{count} Left Items</p>

        </div>
      </div>
    </div>
  )
}

export default App;
