import sequelize from '../database'

const Database = sequelize

const connectDB = () => {
	return new Promise<void>((resolve, reject) => {
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		Database.sync({ force: false }) // example PostgreSQL
			.then(() => {
				console.log('Base de datos - Conectada con éxito! :D');
				resolve();
			})
			.catch((error) => {
				console.log(error);
				reject(error);
			});
	});
};

export default connectDB;