import React, { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import Card from "../component/card.js";
import "../../styles/home.scss";
import { element } from "prop-types";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [speciesList, setSpeciesList] = useState([]);

	useEffect(
		() => {
			if (store.species.results != undefined) {
				setSpeciesList(
					store.species.results.map((species, index) => {
						return <Card key={index.toString()} name={species.name} url={species.url} id={species.uid} />;
					})
				);
			}
		},
		[store.species]
	);
	return (
		<Fragment>
			<h1>¡Que onda?</h1>
			{speciesList}
		</Fragment>
	);
};
