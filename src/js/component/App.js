import React, { useState, useEffect } from 'react';
import '../../styles/index.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);



  const url = "https://assets.breatheco.de/apis/fake/todos/user/66006600";
  const getData = async () => {
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setItems(data);

  }
    useEffect (()=> getData(), [] );


  const addTask = async (task) => {
    try {
      const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/66006600', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      });
      const data = await response.json();

    }
    catch (error) {
      console.log(error);
    }
  }

  async function addItem() {
    const todos = [...items, {label: newItem, done: false}
    ]

    const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/66006600', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todos)
    });
   if (response.ok) {
    getData()
   }

    setNewItem("")
  };

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  };

  async function clearList() {
    try {
      const response = await fetch(url, {
        method: 'DELETE'
      });
      if (response.ok) {
        setItems([]);
      } else {
        console.log('Error deleting the list');
      }
    } catch (error) {
      console.log(error);
    }
  }

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
          {items.map((item, index) => {
              return (
                <li key={index}>{item.label}
                  <button className='delete-boton' onClick={() => deleteItem(item.id)}>X</button>
                </li>
              )
            })}
        </ul>
        <div className='contenedor'>
          {/* <p id='LeftItem'>{count}  Left Items</p> */}
          <button className='ButtonClear' onClick={() => clearList()}>Borrar Todo</button>
        </div>

      </div>
    </div>
  )
}
export default App;
