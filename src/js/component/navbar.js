import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import "../../styles/navBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-transparent mb-3">
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<img className="navbar-brand" src={logo} />
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/" >Sobre nosotros</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/" >Episodios</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/" >Contacto</Link>
						</li>
						<li className="nav-item">
							<FontAwesomeIcon className="mt-2 me-3 ms-2" icon={faTiktok} size="lg" />
							<FontAwesomeIcon className="mt-2 me-3" icon={faYoutube} style={{ color: "red" }} size="lg" />
							<FontAwesomeIcon className="instagram mt-2 me-3" icon={faInstagram} size="lg" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
