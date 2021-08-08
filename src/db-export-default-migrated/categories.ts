import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface categoriesAttributes {
  id: string;
  name?: string;
  description?: string;
  image_url?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type categoriesPk = "id";
export type categoriesId = categories[categoriesPk];
export type categoriesCreationAttributes = Optional<categoriesAttributes, categoriesPk>;

export class categories extends Model<categoriesAttributes, categoriesCreationAttributes> implements categoriesAttributes {
  id!: string;
  name?: string;
  description?: string;
  image_url?: string;
  created_at?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof categories {
    categories.init({
    id: {
      type: DataTypes.STRING(24),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING(255),
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
    tableName: 'categories',
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
  return categories;
  }
}
