import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/home">
				<span className="navbar-brand mb-0 h1">STAR WARS BLOG</span>
			</Link>
			<div className="ml-auto">
				<Link to="/people">
					<button className="btn btn-warning">People</button>
				</Link>
			</div>
		</nav>
	);
};
