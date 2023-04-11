import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="Container">
			<h2>Mi Lista Todos</h2>
			
			<ul>
				<li><input type="text" placeholder="Add More"></input></li>
				<li>Tomar café</li>
				<li>Hacer mi cama</li>				
				<li>Hacer el proyecto</li>
				<li>Flojear el resto del día</li>

			</ul>

		</div>
	);
};

export default Home;
