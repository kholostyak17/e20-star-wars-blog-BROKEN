import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardSW = props => {
	const { store, actions } = useContext(Context);

	return (
		<div id="efect" className="size card text-center text-warning bg-dark border-warning m-3">
			<img
				className="card-img-top"
				src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>

				<Link to="/">
					<button
						onClick={event => {
							actions.favoriteP(props.name);
						}}
					/>
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
