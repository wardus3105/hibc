import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface articlesAttributes {
  id: string;
  author_id?: string;
  title?: string;
  content?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type articlesPk = "id";
export type articlesId = articles[articlesPk];
export type articlesCreationAttributes = Optional<articlesAttributes, articlesPk>;

export class articles extends Model<articlesAttributes, articlesCreationAttributes> implements articlesAttributes {
  id!: string;
  author_id?: string;
  title?: string;
  content?: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof articles {
    articles.init({
    id: {
      type: DataTypes.STRING(24),
      allowNull: false,
      primaryKey: true
    },
    author_id: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
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
