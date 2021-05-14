import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="size card text-center text-warning bg-dark border-warning m-3">
			<img
				className="card-img-top"
				src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.url}</p>

				<Link to={`/species/${props.id}`} className="btn btn-warning font-weight-bold text-dark">
					Learn More
				</Link>
			</div>
		</div>
	);
};
export default Card;
Card.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.string
};
