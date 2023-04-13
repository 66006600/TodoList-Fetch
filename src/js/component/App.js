import React, { useState } from 'react';
import TodoInput from './TodoInput.js';
import TodoList from "./TodoList.js";
import Todo from "./Todo.js";

function App () {

    const [todo, setTodos] = useState ([
        {
            id:1,
            title: 'Tomar cafe late',
            completed: false
        }
        {
            id:2,
            title: 'Hacer la cama',
            completed: false
        }
        {
            id:3,
            title: 'Ver peliculas todo el día',
            completed: false
        }
        {
            id:4,
            title: 'Ir de shopping',
            completed: false
        }
    ])

const Home = () => {
	return(
		<div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
			<div className="container flex flex-col max-w-xl">
				<h1 className="text-3xl font-bold underline">Todo List</h1>
				<TodoInput />
				<TodoList todo={todo} >
					

				
			</div>
		</div>
	);
};
}

export default Home;
