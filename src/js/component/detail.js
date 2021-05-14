import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext.js";

import { element } from "prop-types";

const DetailSpecies = () => {
	const { store, actions } = useContext(Context);
	const param = useParams();
	const [speciesDetailList, setSpeciesDetailList] = useState([]);
	console.log("Ey!");

	useEffect(() => {
		console.log("Ey, estoy en useEffect!");
		console.log(param.id);
		let speciesDetail = store.species.results.find(element => element.uid == param.id);
		console.log("Ey, estoy aqui bajando");
		console.log(speciesDetail);
		actions.getDetails(speciesDetail.url);
	}, []);

	useEffect(
		() => {
			if (store.detailSpecies) {
				console.log(store.detailSpecies);
				setSpeciesDetailList(store.detailSpecies);
			}
		},
		[store.detailSpecies]
	);

	return <h1>Detail {param.id}</h1>;
};

export default DetailSpecies;
