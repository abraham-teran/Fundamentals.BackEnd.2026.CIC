/********************************************************************************

    Curso: "FUNDAMENTOS DE PROGRAMACIÓN BACKEND"
    CENTRO DE INVESTIGACIÓN EN COMPUTACIÓN (CIC-IPN)

    ABRAHAM TERÁN SALCEDO
    https://www.linkedin.com/in/abraham-teran/

*********************************************************************************/

/*-*-*-*-*-*-*-*-*-*- TAREA TRES (3) -*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*/
console.log("-------- TAREA TRES (3) ----------------------------------------------------")

/*-----------------------------------------------------------------------------------------------------*/

const express = require('express');
const app = express();

//const { globalMiddleware, hierarchyMiddleware, specificMiddleware } = require('./middleware/middleware.js');
const chefsRouter = require('./routers/chefs_r.js');
const restaurantsRouter = require('./routers/restaurants_r.js');

const port = process.env.PORT;

app.use(express.json());
app.use('/chefs', chefsRouter);
app.use('/restaurants', restaurantsRouter);

// Route handler
app.get('/', (req, res) => {
	res.json({message:'Chefs and Restaurants Management'});
});


// Listening...
app.listen(port, '0.0.0.0', () => {
	console.log("Listening on port", port);
});

