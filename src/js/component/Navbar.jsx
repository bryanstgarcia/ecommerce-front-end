import React from "react";
import { Link } from "react-router-dom";
import shoppingCar from "./../../img/svg/carrito-compras.png";

export const Navbar = () => {
	return (
		<React.Fragment>
			<div className="pos-f-t">
				<div className="collapse" id="navbarToggleExternalContent">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<Link to="/login" className="nav-link" href="#">
								Iniciar Sesion
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/signup" className="nav-link" href="#">
								Regístrate
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#categorias">
								Categorías
							</a>
						</li>
					</ul>
				</div>
			</div>
			<nav className="navbar barra navbar-light bg-light px-2 py-0 pt-2">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarToggleExternalContent"
					aria-controls="navbarToggleExternalContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<Link to="/" className="brand-name navbar-brand" href="#">
					eCommerce
				</Link>
				<div className="sign-bar">
					<Link to="/login" className={`btn signup-btn d-none d-md-inline-block`} href="#">
						Regístrate
					</Link>
					<Link to="/car" className="car-icon">
						<img src={shoppingCar} alt="" className="car-icon__logo" />
						<span className="car-icon__counter ">0</span>
					</Link>
				</div>
			</nav>
		</React.Fragment>
	);
};