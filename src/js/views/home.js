import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import Footer from "../component/footer.js";
import CardSW from "../component/cardsw.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [planetsToMap, setPlanetsToMap] = useState([]);

	useEffect(() => {
		setPlanetsToMap(
			store.planets.map((planet, index) => {
				console.log("planets", planet);
				return <CardSW key={index.toString()}>{planet.name}</CardSW>;
			})
		);
	});
	return <div className="text-center mt-5">{planetsToMap}</div>;
};
