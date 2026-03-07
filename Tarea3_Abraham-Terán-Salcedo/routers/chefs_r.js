/********************************************************************************

    Curso: "FUNDAMENTOS DE PROGRAMACIÓN BACKEND"
    CENTRO DE INVESTIGACIÓN EN COMPUTACIÓN (CIC-IPN)

    ABRAHAM TERÁN SALCEDO
    https://www.linkedin.com/in/abraham-teran/

*********************************************************************************/

const express = require('express');
const chefRouter = express.Router();

const chefService = require('../services/chefService.js');

chefRouter.get('/', (req, res) => {
	const retrievedChefs = chefService.GetAllChefs();

	res.status(200).json({
		message: 'Chefs List',
		chefs: retrievedChefs
	});
});

chefRouter.get('/:id', (req, res) => {
	const chefID = parseInt(req.params.id);
	const retrievedChef = chefService.GetChef(chefID);

	if (!retrievedChef) {
		res.status(401).json({
			message: `Chef with ID: ${chefID} not found.`
		});
	}

	else {
		res.status(200).json({
			retrievedChef
		});
	}
});

chefRouter.post('/', (req, res) => {
	const chefInfo = req.body;

	chefService.CreateChef(chefInfo);

	res.status(201).json({
		message: 'Chef created.'
	});
});

chefRouter.patch('/rename/:id', (req, res) => {
	const chefID = parseInt(req.params.id);
	const { name: newName } = req.body;

	const chefToModify = chefService.GetChef(chefID);

	if (!chefToModify) {
		res.status(404).json({
			message: `Chef with ID: ${chefID} not found.`
		});
	}

	else {
		chefService.ModifyName(chefID, newName);
		res.status(200).json({
			message: `Chef with ID: ${chefID} renamed to ${newName}`
		});
	}
});

chefRouter.delete('/:id', (req, res) => {
	const chefID = parseInt(req.params.id);
	const chefToDelete = chefService.GetChef(chefID);

	if (!chefToDelete) {
		res.status(404).json({
			message: `Chef with ID: ${chefID} not found.`
		});
	}

	else {
		chefService.DeleteChef(chefID);
		res.status(200).json({
			message: `Chef with ID: ${chefID} deleted.`,
			chefToDelete
		});
	}
});

module.exports = chefRouter;

