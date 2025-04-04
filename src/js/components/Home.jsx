import React, { useState } from "react";


import { Prueba } from "./prubea.jsx";
import { Card } from "./card.jsx"
import { SelectorDeCoche } from "./seleccionaCoche.jsx";
//create your first component
const Home = () => {

	//variables let o const NO generan renderizados
	//las variables let y const como las usabamos en JS, ahora seran estados
	// las variables let y const principalmente se usaran dentro de funciones
	let counter = 0


	//todo lo que empiece por 'use' react lo toma como un hook ---> NO USAR 
	//todos los eventos comienzan on 'on' ---> NO USAR 

	//syntaxis --> const [variable, setVariable] = useState(0);


	const [stateCounter, setStateCounter] = useState(0)

	console.log('se renderizo home')

	const handleClickDown = () => {
		console.log('down');
		setStateCounter(prev => prev - 1)
	}

	const handleClickUp = () => {
		console.log('up');
		setStateCounter(prev => prev + 1)
	}


	return (
		<div className="text-center">
			<p className="fs-1">componente home</p>
			<p className="fs-1">{counter}</p>

			<hr />

			<p className="fs-1">{stateCounter}</p>
			<div>
				<button onClick={handleClickDown} className="btn btn-light">Down</button>
				<button onClick={handleClickUp} className="btn btn-dark">Up</button>
				{/* TIENE QUE SER UNA FUNCION ANONIMA ()=> LA QUE EJECUTE LA INSTRUCCION */}
				<button onClick={() => setStateCounter(0)} className="btn btn-secondary">reset</button>

			</div>
			<Prueba />

			<Card />
			<SelectorDeCoche />
		</div>
	);
};

export default Home;