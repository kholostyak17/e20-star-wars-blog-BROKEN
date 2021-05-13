import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardSW = props => {
	return (
		<div className="size card text-center text-warning bg-dark border-warning m-3">
			<img
				className="card-img-top"
				src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>

				<Link to="/hola">
					<a href="#" className="btn btn-warning font-weight-bold text-dark">
						Learn More
					</a>
				</Link>
			</div>
		</div>
	);
};
export default CardSW;

CardSW.propTypes = {
	name: PropTypes.string
};
/**
 *
 */
