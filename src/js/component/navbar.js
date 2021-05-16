import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/home">
				<span className="navbar-brand mb-0 h1 text-warning">STAR WARS BLOG</span>
			</Link>
			<Link to="/people">
				<button className="btn btn-warning">People</button>
			</Link>
<<<<<<< HEAD
			<Link to="/">
				<button className="btn btn-warning">Planets</button>
			</Link>
			<Link to="/species">
=======
			<Link to="/">
				<button className="btn btn-warning">Planets</button>
			</Link>
			<Link to="/">
>>>>>>> c7f8b9b35e4d37d4b8ae5ece760244163c2bbb7f
				<button className="btn btn-warning">Species</button>
			</Link>
		</nav>
	);
};
