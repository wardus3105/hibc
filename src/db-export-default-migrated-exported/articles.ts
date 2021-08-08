import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface articlesAttributes {
	id: string;
	authorId?: string;
	title?: string;
	content?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export type articlesPk = "id";
export type articlesId = articles[articlesPk];
export type articlesCreationAttributes = Optional<articlesAttributes, articlesPk>;

export class articles extends Model<articlesAttributes, articlesCreationAttributes> implements articlesAttributes {
	id!: string;
	authorId?: string;
	title?: string;
	content?: string;
	createdAt?: Date;
	updatedAt?: Date;


	static initModel(sequelize: Sequelize.Sequelize): typeof articles {
		articles.init({
			id: {
				type: DataTypes.STRING(24),
				allowNull: false,
				primaryKey: true
			},
			authorId: {
				field: "author_id",
				type: DataTypes.STRING(24),
				allowNull: true
			},
			title: {
				field: "title",
				type: DataTypes.STRING(255),
				allowNull: true
			},
			content: {
				field: "content",
				type: DataTypes.TEXT,
				allowNull: true
			},
			createdAt: {
				field: "created_at",
				type: DataTypes.DATE,
				allowNull: true,
				/*get(this: any) {
					return this.getDataValue('created_at').getTime();
				}*/
			},
			updatedAt: {
				field: "updated_at",
				type: DataTypes.DATE,
				allowNull: true,
				/*get(this: any) {
					return this.getDataValue('updated_at').getTime();
				}*/
			}
		}, {
			sequelize,
			tableName: 'articles',
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
			]
		});
		return articles;
	}
}
