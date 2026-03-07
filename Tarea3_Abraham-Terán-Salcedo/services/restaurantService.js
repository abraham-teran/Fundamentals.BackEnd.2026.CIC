/********************************************************************************

    Curso: "FUNDAMENTOS DE PROGRAMACIÓN BACKEND"
    CENTRO DE INVESTIGACIÓN EN COMPUTACIÓN (CIC-IPN)

    ABRAHAM TERÁN SALCEDO
    https://www.linkedin.com/in/abraham-teran/

*********************************************************************************/

const restaurants_list = require('../libs/restaurantsLibs.js');

class Restaurant {
	constructor(input_name) {
		this.name = input_name;
		this.chefs = {};
	}

	static GetAllRestaurants() {
		return restaurants_list;
	}

	static GetRestaurant(restaurantID) {
		const retrievedRestaurant = restaurants_list[restaurantID];
		return retrievedRestaurant;
	}

	static CreateRestaurant(restaurantInfo) {
		const restaurantIndex = Object.keys(restaurants_list).length;

		const newRestaurant = new Restaurant(restaurantInfo.name);

		restaurants_list[restaurantIndex] = newRestaurant;
		return true;
	}

	static ModifyName(restaurantID, newName) {
		restaurants_list[restaurantID].name = newName;
		return true;
	}

	static DeleteRestaurant(restaurantID) {
		const retrievedRestaurant = restaurants_list[restaurantID];
		delete restaurants_list[restaurantID];
	}
}

module.exports = Restaurant;

