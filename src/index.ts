// 	   /\_/\
//    ( o.o )
// 	   > ^ <
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//		─────▄████▀█▄
//		───▄█████████████████▄
//		─▄█████.▼.▼.▼.▼.▼.▼▼▼▼
//		▄███████▄.▲.▲▲▲▲▲▲▲▲
//		████████████████████▀▀

import startServer from '@config/functions/startServer';
import connectDB from '@config/functions/connect-DB';

const runApp = async (): Promise<boolean> => {
	try {
		await startServer();
		await connectDB();
	} catch (err) {
		console.log('ERROR!!');
		throw new Error(err);
	}

	return true;
};
runApp();
