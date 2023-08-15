import Database from '@config/database'

const connectDB = () => {
	return new Promise<void>((resolve, reject) => {
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		Database.sync({ force: false })
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