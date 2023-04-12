import React from "react";
import { useState } from "react";

import TodoList from "./TodoList";

//create your first component
const Home = () => {
	return (
		<div className="Container">
			
			<div>
				<TodoList />
			</div>


		</div>
	);
};

export default Home;
