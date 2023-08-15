import env from '@config/var-environments';
import { Sequelize } from 'sequelize';

if (!env.DB_NAME || !env.USERNAME_DB || !env.PASSWORD_DB || !env.HOST) {
	throw new Error('Missing environment variables.');
}

const Database = new Sequelize(
	env.DB_NAME, // db name,
	env.USERNAME_DB, // username
	env.PASSWORD_DB, // password
	{
		host: env.HOST,
		dialect: 'postgres',
	},
);

export default Database;
