import bcrypt from 'bcrypt';
import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface usersAttributes {
	id: string;
	username: string;
	password: string;
	salt?: string;
	isAdmin?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersCreationAttributes = Optional<usersAttributes, usersPk>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
	id!: string;
	username!: string;
	password!: string;
	salt?: string;
	isAdmin?: boolean;
	createdAt?: Date;
	updatedAt?: Date;

	static initModel(sequelize: Sequelize.Sequelize): typeof users {
		users.init({
			id: {
				type: DataTypes.STRING(24),
				allowNull: false,
				primaryKey: true
			},
			username: {
				type: DataTypes.STRING(64),
				allowNull: false,
				unique: "username"
			},
			password: {
				type: DataTypes.STRING(255),
				allowNull: false
			},
			salt: {
				type: DataTypes.STRING(8),
				allowNull: true
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
				allowNull: true
			},
			createdAt: {
				field: "created_at",
				type: DataTypes.DATE,
				allowNull: true,
				get(this: any) {
					var createdAt = this.getDataValue('createdAt');
					if(createdAt) {
						return createdAt.getTime();
					} else {
						return null;
					}
				}
			},
			updatedAt: {
				field: "updated_at",
				type: DataTypes.DATE,
				allowNull: true,
				get(this: any) {
					var updatedAt = this.getDataValue('updatedAt');
					if(updatedAt) {
						return updatedAt.getTime();
					} else {
						return null;
					}

				}
			}

		}, {
			sequelize,
			tableName: 'users',
			timestamps: false,
			indexes: [
				{
					name: "PRIMARY",
					unique: true,
					using: "BTREE",
					fields: [
						{ name: "id" },
					]
				},
				{
					name: "username",
					unique: true,
					using: "BTREE",
					fields: [
						{ name: "username" },
					]
				},
			],
			hooks: {
				beforeSave: (user,options) => {
					if(user.password) {
						console.log("called");
						const salt = bcrypt.genSaltSync(10);
						const hash = bcrypt.hashSync(user.password, salt);
						user.password = hash;
						user.salt = salt;

					}
				},
			}
		});
		return users;
	}
}
