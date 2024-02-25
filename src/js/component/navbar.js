import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import "../../styles/navBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-transparent">
			<div className="container-fluid">
				<img className="navbar-brand" src={logo} />
				<button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<FontAwesomeIcon icon={faBars} size="lg" style={{ color: "#ffffff", }} />
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
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
							<a href="https://www.tiktok.com/@epachams.podcast?_t=8kBJ6wGaeFa&_r=1">
								<FontAwesomeIcon className="mt-2 me-3 ms-2" icon={faTiktok} style={{ color: "black" }} size="lg" />
							</a>
							<a href="https://youtube.com/@Epachamas?si=e9hDIpw0rDCwIj5O">
								<FontAwesomeIcon className="mt-2 me-3" icon={faYoutube} style={{ color: "red" }} size="lg" />
							</a>
							<a href="https://www.instagram.com/epachamas?igsh=MW9uZTNxNzA0eXh2cw==">
								<FontAwesomeIcon className="instagram mt-2 me-3" icon={faInstagram} size="lg" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
