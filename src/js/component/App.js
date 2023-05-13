import React, { useState, useEffect } from 'react';
import '../../styles/index.css';
let input = document.querySelector("input");

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    obtenerLista();

  }, [])

  function obtenerLista() {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/Beverly',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then(response => {
        if (response.status == 404) {
          crearLista()
        } else {
          return response.json()
        }
      })
      .then(data => {
        console.log(data)
        setItems(data)
        console.log(items, "setItems")


      })

      .catch(error => {
        console.log(error);
      })

  }

  const crearLista = () => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/Beverly',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([])
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(error));
  }

  // input.addEventListener("keydown", function(event) {
  //   if(event.key == "Enter") {
  //     let li = document.createElement("li")
  //     li.textContent = input.value
  //   }
  // }  
  // )

  function addItem() {
    if (!newItem) {
      alert("DIEGO: Enter an item");
      return;
    }

    const item = {
      label: newItem, done: false
    };

    fetch('https://assets.breatheco.de/apis/fake/todos/user/Beverly', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([...items, item])

    })

      .then(response => {
        if (response.ok) {
          obtenerLista()
        }
      })

      .catch(error => {
        console.error(error)
      });
  };

  function deleteItem(id) {
    fetch(`/api/todos/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
        setCount(oldCount => oldCount - 1);
      })
      .catch(error => console.error(error));
  };

  function deleteAll() {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/Beverly', {
      method: 'DELETE'
    })
      .then(() => {
        setItems([]);
        setCount(0);
        crearLista()
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
          onChange={e => {
            setNewItem(e.target.value);
            console.log(newItem)
          }
          }
        />
        <button className='ButtonAdd' onClick={() => addItem()}>Add</button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>{item?.label}
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
