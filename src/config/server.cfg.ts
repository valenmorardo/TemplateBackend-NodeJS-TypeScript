import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from 'express';

const server = express();

// PARAMETROS DEL SERVER
// cualquier peticion la converitmos en json
server.use(bodyParser.json());
server.use(express.json());
server.use(cookieParser());
// cargamos body parser que es un middleware para analizar cuerpos atravez de la url
server.use(bodyParser.urlencoded({ extended: false }));
// activamos el CORS para permitir las peticions AJAX y HTTP desde el front
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Access-Control-Allow-Headers, Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Request-Method, Access-Control-Allow-Request-Method, Access-Control-Request-Headers,  Access-Control-Allow-Origin',
	);
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Request-Headers', '*');
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Methods',
		'GET, HEAD, POST, OPTIONS, PUT, DELETE',
	);
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


/* const allRoutes = require('../Routes/routes.js');
server.use('/', allRoutes); */

export default server;