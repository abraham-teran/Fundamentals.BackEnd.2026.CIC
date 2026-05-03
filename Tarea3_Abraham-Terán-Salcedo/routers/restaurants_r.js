/********************************************************************************

    Curso: "FUNDAMENTOS DE PROGRAMACIÓN BACKEND"
    CENTRO DE INVESTIGACIÓN EN COMPUTACIÓN (CIC-IPN)

    ABRAHAM TERÁN SALCEDO
    https://www.linkedin.com/in/abraham-teran/

*********************************************************************************/

const express = require('express');
const restaurantRouter = express.Router();

const restaurantService = require('../services/restaurantService.js');

restaurantRouter.get('/', (req, res) => {
	const retrievedRestaurants = restaurantService.GetAllRestaurants();

	res.status(200).json({
		message: 'Restaurants List',
		restaurants: retrievedRestaurants
	});
});

restaurantRouter.get('/:id', (req, res) => {
	const restaurantID = parseInt(req.params.id);
	const retrievedRestaurant = restaurantService.GetRestaurant(restaurantID);

	if (!retrievedRestaurant) {
		res.status(401).json({
			message: `Restaurant with ID: ${restaurantID} not found.`
		});
	}

	else {
		res.status(200).json({
			retrievedRestaurant
		});

	}
});

restaurantRouter.post('/', (req, res) => {
	const restaurantInfo = req.body;

	restaurantService.CreateRestaurant(restaurantInfo);

	res.status(201).json({
		message: 'Restaurant created.'
	});
});

restaurantRouter.patch('/rename/:id', (req, res) => {
	const restaurantID = parseInt(req.params.id);
	const { name: newName } = req.body;

	const restaurantToModify = restaurantService.GetRestaurant(restaurantID);

	if (!restaurantToModify) {
		res.status(404).json({
			message: `Restaurant with ID: ${restaurantID} not found.`
		});
	}

	else {
		restaurantService.ModifyName(restaurantID, newName);
		res.status(200).json({
			message: `Restaurant with ID: ${restaurantID} renamed to ${newName}`
		});
	}
});

restaurantRouter.delete('/:id', (req, res) => {
	const restaurantID = parseInt(req.params.id);
	const restaurantToDelete = restaurantService.GetRestaurant(restaurantID);

	if (!restaurantToDelete) {
		res.status(404).json({
			message: `Restaurant with ID: ${restaurantID} not found.`
		});
	}

	else {
		restaurantService.DeleteRestaurant(restaurantID);
		res.status(200).json({
			message: `Restaurant with ID: ${restaurantID} deleted.`,
			restaurantToDelete
		});
	}
});

module.exports = restaurantRouter;

