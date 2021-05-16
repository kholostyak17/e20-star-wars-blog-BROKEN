import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PeopleDetails = () => {
	const { store, actions } = useContext(Context);
	const [peopleDetails, setPeopleDetails] = useState([]);
	const params = useParams();
	console.log(store.peopleDetails.result);

	useEffect(() => {
		actions.getPeopleDetails(params.id);
	}, []);
	useEffect(
		() => {
			if (store.peopleDetails.result != undefined) {
				setPeopleDetails(
					<ul>
						<li>nombre: {store.peopleDetails.result.properties.name}</li>
						<li>hola</li>
						<li>caracteristica</li>
						<li>caracteristica</li>
						<li>caracteristica</li>
						<li>joder</li>
						<li>caracteristica</li>
					</ul>
				);
			}
		},
		[store.peopleDetails]
	);

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
				{peopleDetails}
			</div>
		</div>
	);
};
