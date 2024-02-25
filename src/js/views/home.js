import React from "react";
import splash from "../../img/splash-Photoroom.png"
import woman from "../../img/woman.png"

import "../../styles/home.css";
import "animate.css"

export const Home = () => (
	<div className="landing-page d-flex">
		<div className="text">
			<h1 className="animate__animated animate__zoomIn ps-4 text-white">
				El primer podcast, en Venezuela, que empodera a la juventud con
				conocimientos financieros.
			</h1>
			<button className="btn btn-primary m-3">Episodios</button>
			<button className="btn btn-primary m-3">Contacto</button>
		</div>
		<img className="img-fluid splash" src={splash} />
		<img className="img-fluid woman" src={woman} />
		<div></div>
	</div>
);
