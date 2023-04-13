import React from "react";

import TodoInput from './TodoInput.js';
import TodoList from "./TodoList.js";
import Todo from "./Todo.js";

const Home = () => {
	return(
		<div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
			<div className="container flex flex-col max-w-xl">
				<h1 className="text-3xl font-bold underline">Todo List</h1>
				<TodoInput />
				<TodoList />
			</div>
		</div>
	);
};


export default Home;
