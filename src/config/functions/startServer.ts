import env from '@config/var-environments';
import server from '@config/server.cfg';

const startServer = () => {
	return new Promise<void>((resolve, reject) => {
		try {
			server.listen(env.PORT || 3001, () => {
				console.log(`Servidor corriendo en el puerto: ${env.PORT}`);
				resolve();
			});
		} catch (error) {
			console.log('EROR!!');
			reject(error);
		}
		return true;
	});
};

export default startServer;
