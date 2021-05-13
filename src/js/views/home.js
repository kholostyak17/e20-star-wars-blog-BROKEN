import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return <div>Que onda</div>;
	// 	<Fragment>
	// 		{/* store.species.map ( element, index=>
	// 	{<Card />}) */}
	// 		Hola, soy home
	// 	</Fragment>
	// );
};
