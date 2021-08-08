import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { machines, machinesId } from './machines';
import type { product_mapping_details, product_mapping_detailsId } from './product_mapping_details';

export interface product_mappingsAttributes {
  id: string;
  machineId: string;
  productId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type product_mappingsPk = "id";
export type product_mappingsId = product_mappings[product_mappingsPk];
export type product_mappingsCreationAttributes = Optional<product_mappingsAttributes, product_mappingsPk>;

export class product_mappings extends Model<product_mappingsAttributes, product_mappingsCreationAttributes> implements product_mappingsAttributes {
  id!: string;
  machineId!: string;
  productId!: string;
  createdAt?: Date;
  updatedAt?: Date;

  // product_mappings belongsTo machines via machine_id
  machine!: machines;
  getMachine!: Sequelize.BelongsToGetAssociationMixin<machines>;
  setMachine!: Sequelize.BelongsToSetAssociationMixin<machines, machinesId>;
  createMachine!: Sequelize.BelongsToCreateAssociationMixin<machines>;
  // product_mappings hasMany product_mapping_details via product_mapping_id
  product_mapping_details!: product_mapping_details[];
  getProduct_mapping_details!: Sequelize.HasManyGetAssociationsMixin<product_mapping_details>;
  setProduct_mapping_details!: Sequelize.HasManySetAssociationsMixin<product_mapping_details, product_mapping_detailsId>;
  addProduct_mapping_detail!: Sequelize.HasManyAddAssociationMixin<product_mapping_details, product_mapping_detailsId>;
  addProduct_mapping_details!: Sequelize.HasManyAddAssociationsMixin<product_mapping_details, product_mapping_detailsId>;
  createProduct_mapping_detail!: Sequelize.HasManyCreateAssociationMixin<product_mapping_details>;
  removeProduct_mapping_detail!: Sequelize.HasManyRemoveAssociationMixin<product_mapping_details, product_mapping_detailsId>;
  removeProduct_mapping_details!: Sequelize.HasManyRemoveAssociationsMixin<product_mapping_details, product_mapping_detailsId>;
  hasProduct_mapping_detail!: Sequelize.HasManyHasAssociationMixin<product_mapping_details, product_mapping_detailsId>;
  hasProduct_mapping_details!: Sequelize.HasManyHasAssociationsMixin<product_mapping_details, product_mapping_detailsId>;
  countProduct_mapping_details!: Sequelize.HasManyCountAssociationsMixin;

// export class product_mappings extends Model {
  static initModel(sequelize: Sequelize.Sequelize): typeof product_mappings {
    product_mappings.init(
      {
        id: {
          field: "id",
          type: DataTypes.STRING(36),
          allowNull: false,
          primaryKey: true,
        },
        machineId: {
          field: "machine_id",
          type: DataTypes.STRING(36),
          allowNull: false,
          references: {
            model: "machines",
            key: "id",
          },
        },
        productId: {
          field: "product_id",
          type: DataTypes.STRING(36),
          allowNull: false,
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
        tableName: "product_mappings",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "machine_id",
            using: "BTREE",
            fields: [{ name: "machine_id" }],
          },
        ],
      }
    );
    return product_mappings;
  }
}
