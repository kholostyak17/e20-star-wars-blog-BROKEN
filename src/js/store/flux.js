const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {},
<<<<<<< HEAD
			peopleDetails: {},
			species: {},
			speciesDetails: {}
		},
		actions: {
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/", { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ people: responseAsJson });
					});
			},
			getPeopleDetails: uid => {
				fetch("https://www.swapi.tech/api/people/".concat(uid), { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson, "joder");
						setStore({ peopleDetails: responseAsJson });
					});
			},
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
			getSpeciesDetails: uid => {
				fetch("https://www.swapi.tech/api/species/".concat(uid), { method: "GET" })
=======
			peopleDetails: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			/*	exampleFunction: () => {
				getActions().changeColor(0, "green");
        		},
			loadSomeData: () => {
					fetch().then().then(data => setStore({ "foo": data.bar }))
			},
		 getPeople0: async () => {
				let peopleStored = [];
				let response = await fetch("https://www.swapi.tech/api/people/", { method: "GET" });
				let responseAsJson = await response.json();
				console.log(typeof responseAsJson);
				setStore({ people: responseAsJson });
			},
         */
			// KURWA NO FUNCIONA . СУКА БЛЯТЬ!!!!!

			/*	getPeople: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/people/");
					if (response.ok) {
						let responseAsJson = await response.json();
						//console.log(responseAsJson);
						setStore({ people: responseAsJson });
					}
					throw new Error(response.statusText, " code: ", response.status);
				} catch (error) {
					console.log(error);
				}
            }
        */

			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/", { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ people: responseAsJson });
					});
			},
			getPeopleDetails: uid => {
				fetch("https://www.swapi.tech/api/people/".concat(uid), { method: "GET" })
>>>>>>> c7f8b9b35e4d37d4b8ae5ece760244163c2bbb7f
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson, "joder");
<<<<<<< HEAD
						setStore({ speciesDetails: responseAsJson });
=======
						setStore({ peopleDetails: responseAsJson });
>>>>>>> c7f8b9b35e4d37d4b8ae5ece760244163c2bbb7f
					});
			}
		}
	};
};

export default getState;
