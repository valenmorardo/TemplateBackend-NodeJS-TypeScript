import { DataTypes, Model } from 'sequelize';
import Database from '@config/database';

import { ProjectAttributes } from 'src/services/Types_&_Interfaces';

const Project = Database.define<Model, ProjectAttributes>(
	'projects',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: false,
	},
);

export default Project;

// en caso de q tengamos relaciones, un ejemplo es este:
// supongamos q tenes un modelo o tabla Task que lo relacionas con el modelo o tabla Project

/* const {Task} = require('./Task.js')
Project.hasMany(Task, {
  foreinkey: "projectId",
  sourceKey: "id",
});

Task.belongsTo(Project, {
  foreinkey: "projectId",
  targetId: "id",
}); */
