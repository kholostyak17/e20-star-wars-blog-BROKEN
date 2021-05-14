const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favourite: [],
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
			},
			favoriteP: favoriteP => {
				if (!getStore().favourite.includes(favoriteP)) {
					setStore({ favourite: [...getStore().favourite, favoriteP] });
					console.log(getStore().favourite);
				}
			}
		}
	};
};

export default getState;
