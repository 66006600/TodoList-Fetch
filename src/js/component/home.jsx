import React from "react";
import TodoInput from './TodoInput.js';
import TodoList from "./TodoList.js";
import Todo from "./Todo.js";


function App() {
	return (
		<div className="Contenedor">
			<div className="container">
				<h1> 
					Todo List
				</h1>
				<TodoInput />
				<TodoList>
					<h2><Todo></Todo></h2>
				</TodoList>

			</div>

		</div>
	)



}
export default App;
