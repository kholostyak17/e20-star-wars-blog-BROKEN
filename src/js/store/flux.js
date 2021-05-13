const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: {
				species: {}
			}
		},
		actions: {
			getSpecies: async () => {
				let speciesStored = [];
				let response = await fetch("https://www.swapi.tech/api/species/");
				let responseAsJson = await response.json();
				console.log(responseAsJson);

				responseAsJson.results.map(element => {
					speciesStored.push(element);
				});

				setStore({ species: speciesStored });
				// console.log("Soy el log de Home");
			}
		}
	};
};

export default getState;
