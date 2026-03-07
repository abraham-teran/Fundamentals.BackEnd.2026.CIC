/********************************************************************************

    Curso: "FUNDAMENTOS DE PROGRAMACIÓN BACKEND"
    CENTRO DE INVESTIGACIÓN EN COMPUTACIÓN (CIC-IPN)

    ABRAHAM TERÁN SALCEDO
    https://www.linkedin.com/in/abraham-teran/

*********************************************************************************/

const chefs_list = require('../libs/chefsLibs.js');

class Chef {
	constructor(input_name) {
		this.name = input_name;
		this.restaurant = null;
	}

	static GetAllChefs() {
		return chefs_list;
	}

	static GetChef(chefID) {
		const retrievedChef = chefs_list[chefID];
		return retrievedChef;
	}

	static CreateChef(chefInfo) {
		const chefIndex = Object.keys(chefs_list).length;

		const newChef = new Chef(chefInfo.name);

		chefs_list[chefIndex] = newChef;
		return true;
	}

	static ModifyName(chefID, newName) {
		chefs_list[chefID].name = newName;
		return true;
	}

	static DeleteChef(chefID) {
		const retrievedChef = chefs_list[chefID];
		delete chefs_list[chefID];
	}
}

module.exports = Chef;

