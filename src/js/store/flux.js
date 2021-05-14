const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			species: [],
			detailSpecies: {}
		},
		actions: {
			getSpecies: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/species/");

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ species: responseAsJson });
					} else {
						throw new Error(response.statusText, "code:", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getDetails: async url => {
				console.log("estoy en flux");
				try {
					let response = await fetch(url);

					if (response.ok) {
						let responseAsJson = await response.json();
						console.log(responseAsJson);
						setStore({ detailSpecies: responseAsJson.result });
					} else {
						throw new Error(response.statusText, "code:", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
