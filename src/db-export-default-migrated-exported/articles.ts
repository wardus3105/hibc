import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import { genGuidId } from '../uuid';

export interface articlesAttributes {
	id: string;
	authorId?: string;
	title?: string;
	content?: string;
	tags?: string;
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
	tags?: string;
	createdAt?: Date;
	updatedAt?: Date;
	
	static TABLE_NAME = "article";

	static initModel(sequelize: Sequelize.Sequelize): typeof articles {
		articles.init({
			id: {
				type: DataTypes.STRING(24),
				allowNull: true,
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
			tags: {
				field: "tags",
				type: DataTypes.TEXT,
				allowNull: true,
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
			tableName: 'articles',
			timestamps: true,
			indexes: [
				{
					name: "PRIMARY",
					unique: true,
					using: "BTREE",
					fields: [
						{ name: "id" },
					]
				},
			],
			hooks: {
				beforeCreate: (article, option) => {
					article.id = genGuidId(articles.TABLE_NAME);
				}
			} 
		});
		return articles;
	}
}
