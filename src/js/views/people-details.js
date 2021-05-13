import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const PeopleDetails = () => {
	const { store, actions } = useContext(Context);

	/* const [detailsList, setDetailsList] = useState([]);
    setDetailsList(.map((elem,index)=>{
        <li></li>
    }))
    */
	return (
		<div className="container row">
			<div className="col-8">
				<img src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg" />
			</div>
			<div className="col-4">
				<h2>Lagarto</h2>
				<ul>
					<li>nombre</li>
					<li>hola</li>
					<li>caracteristica</li>
					<li>caracteristica</li>
					<li>caracteristica</li>
					<li>joder</li>
					<li>caracteristica</li>
				</ul>
			</div>
		</div>
	);
};
