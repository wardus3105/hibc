import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { products, productsId } from './products';

export interface product_typesAttributes {
  id: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type product_typesPk = "id";
export type product_typesId = product_types[product_typesPk];
export type product_typesCreationAttributes = Optional<product_typesAttributes, product_typesPk>;

export class product_types extends Model<product_typesAttributes, product_typesCreationAttributes> implements product_typesAttributes {
  id!: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;

  // product_types hasMany products via product_type_id
  products!: products[];
  getProducts!: Sequelize.HasManyGetAssociationsMixin<products>;
  setProducts!: Sequelize.HasManySetAssociationsMixin<products, productsId>;
  addProduct!: Sequelize.HasManyAddAssociationMixin<products, productsId>;
  addProducts!: Sequelize.HasManyAddAssociationsMixin<products, productsId>;
  createProduct!: Sequelize.HasManyCreateAssociationMixin<products>;
  removeProduct!: Sequelize.HasManyRemoveAssociationMixin<products, productsId>;
  removeProducts!: Sequelize.HasManyRemoveAssociationsMixin<products, productsId>;
  hasProduct!: Sequelize.HasManyHasAssociationMixin<products, productsId>;
  hasProducts!: Sequelize.HasManyHasAssociationsMixin<products, productsId>;
  countProducts!: Sequelize.HasManyCountAssociationsMixin;

// export class product_types extends Model {
  static initModel(sequelize: Sequelize.Sequelize): typeof product_types {
    product_types.init(
      {
        id: {
          field: "id",
          type: DataTypes.STRING(36),
          allowNull: false,
          primaryKey: true,
        },
        name: {
          field: "name",
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        createdAt: {
          field: "created_at",
          type: DataTypes.DATE,
          allowNull: true,
        },
        updatedAt: {
          field: "updated_at",
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "product_types",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
        ],
      }
    );
    return product_types;
  }
}
