import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type {
  product_mapping_details,
  product_mapping_detailsId,
} from "./product_mapping_details";

export interface ordersAttributes {
  id: string;
  productMappingDetailId: string;
  payType?: '0' | '1';
  status?: '0' | '1' | '2';
  amount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ordersPk = "id";
export type ordersId = orders[ordersPk];
export type ordersCreationAttributes = Optional<ordersAttributes, ordersPk>;

export class orders extends Model<ordersAttributes, ordersCreationAttributes> implements ordersAttributes {
  id!: string;
  productMappingDetailId!: string;
  payType?: '0' | '1';
  status?: '0' | '1' | '2';
  amount?: number;
  createdAt?: Date;
  updatedAt?: Date;

  // orders belongsTo product_mapping_details via product_mapping_detail_id
  product_mapping_detail!: product_mapping_details;
  getProduct_mapping_detail!: Sequelize.BelongsToGetAssociationMixin<product_mapping_details>;
  setProduct_mapping_detail!: Sequelize.BelongsToSetAssociationMixin<product_mapping_details, product_mapping_detailsId>;
  createProduct_mapping_detail!: Sequelize.BelongsToCreateAssociationMixin<product_mapping_details>;

// export class orders extends Model {
  static initModel(sequelize: Sequelize.Sequelize): typeof orders {
    orders.init(
      {
        id: {
          field: "id",
          type: DataTypes.STRING(36),
          allowNull: false,
          primaryKey: true,
        },
        productMappingDetailId: {
          field: "product_mapping_detail_id",
          type: DataTypes.STRING(36),
          allowNull: false,
          references: {
            model: "product_mapping_details",
            key: "id",
          },
        },
        payType: {
          field: "pay_type",
          type: DataTypes.ENUM("0", "1"),
          allowNull: true,
        },
        status: {
          field: "status",
          type: DataTypes.ENUM("0", "1", "2"),
          allowNull: true,
        },
        amount: {
          type: DataTypes.INTEGER,
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
        tableName: "orders",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "product_mapping_detail_id",
            using: "BTREE",
            fields: [{ name: "product_mapping_detail_id" }],
          },
        ],
      }
    );
    return orders;
  }
}
