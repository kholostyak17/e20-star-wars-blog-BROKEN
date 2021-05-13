const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			urlRoot: "https://www.swapi.tech/api/"
		},
		actions: {
			loadSomeData: () => {
				fetch(getStore().urlRoot.concat("planets"))
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
						setStore({ planets: responseAsJson.results });
					});
			}
		}
	};
};

export default getState;
