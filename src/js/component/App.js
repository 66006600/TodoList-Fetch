import React, { useState, useEffect } from 'react';
import '../../styles/index.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://github.com/66006600/TodoList')
      .then(response => response.json())
      .then(data => {
        setItems(data.todos);
        setCount(data.todos.filter(item => !item.completed).length);
      })
      .catch(error => console.error(error));
  }, []);

  function addItem() {
    if (!newItem) {
      alert("DIEGO: Enter an item");
      return;
    }

    const item = {
      value: newItem
    };

    fetch('https://github.com/66006600/TodoList.git', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(data => {
        setItems(oldList => [...oldList, data.todo]);
        setCount(oldCount => oldCount + 1);
        setNewItem("");
      })
      .catch(error => console.error(error));
  };

  // function deleteItem(id) {
  //   fetch(`/api/todos/${id}`, {
  //     method: 'DELETE'
  //   })
  //     .then(() => {
  //       const newArray = items.filter(item => item.id !== id);
  //       setItems(newArray);
  //       setCount(oldCount => oldCount - 1);
  //     })
  //     .catch(error => console.error(error));
  // };

  function deleteAll() {
    fetch('/api/todos', {
      method: 'DELETE'
    })
      .then(() => {
        setItems([]);
        setCount(0);
      })
      .catch(error => console.error(error));
  };

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
        <div className='contenedor'>
          <p id='LeftItem'>{count} Left Items</p>
          <div> <button className='ButtonAdd' onClick={() => deleteAll()}>Clear All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
