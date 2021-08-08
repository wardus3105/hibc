import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { orders, ordersId } from "./orders";
import type { product_mappings, product_mappingsId } from "./product_mappings";

export interface product_mapping_detailsAttributes {
  id: string;
  productMappingId: string;
  slotNo?: number;
  slotNumber?: string;
  keyNum?: number;
  status?: number;
  quantity?: number;
  stock?: number;
  price?: number;
  pickupCode?: number;
  isPickup?: "0" | "1";
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
  name?: string;
  imageUrl?: string;
}

export type product_mapping_detailsPk = "id";
export type product_mapping_detailsId = product_mapping_details[product_mapping_detailsPk];
export type product_mapping_detailsCreationAttributes = Optional<
  product_mapping_detailsAttributes,
  product_mapping_detailsPk
>;

export class product_mapping_details
  extends Model<
    product_mapping_detailsAttributes,
    product_mapping_detailsCreationAttributes
  >
  implements product_mapping_detailsAttributes {
  id!: string;
  productMappingId!: string;
  slotNo?: number;
  slotNumber?: string;
  keynum?: number;
  status?: number;
  quantity?: number;
  stock?: number;
  price?: number;
  pickupCode?: number;
  isPickup?: "0" | "1";
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
  name?: string ;
  imageUrl?: string;

  // product_mapping_details hasMany orders via product_mapping_detail_id
  orders!: orders[];
  getOrders!: Sequelize.HasManyGetAssociationsMixin<orders>;
  setOrders!: Sequelize.HasManySetAssociationsMixin<orders, ordersId>;
  addOrder!: Sequelize.HasManyAddAssociationMixin<orders, ordersId>;
  addOrders!: Sequelize.HasManyAddAssociationsMixin<orders, ordersId>;
  createOrder!: Sequelize.HasManyCreateAssociationMixin<orders>;
  removeOrder!: Sequelize.HasManyRemoveAssociationMixin<orders, ordersId>;
  removeOrders!: Sequelize.HasManyRemoveAssociationsMixin<orders, ordersId>;
  hasOrder!: Sequelize.HasManyHasAssociationMixin<orders, ordersId>;
  hasOrders!: Sequelize.HasManyHasAssociationsMixin<orders, ordersId>;
  countOrders!: Sequelize.HasManyCountAssociationsMixin;
  // product_mapping_details belongsTo product_mappings via product_mapping_id
  product_mapping!: product_mappings;
  getProduct_mapping!: Sequelize.BelongsToGetAssociationMixin<product_mappings>;
  setProduct_mapping!: Sequelize.BelongsToSetAssociationMixin<
    product_mappings,
    product_mappingsId
  >;
  createProduct_mapping!: Sequelize.BelongsToCreateAssociationMixin<product_mappings>;

  // export class product_mapping_details extends Model {

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof product_mapping_details {
    product_mapping_details.init(
      {
        id: {
          field: "id",
          type: DataTypes.STRING(36),
          allowNull: false,
          primaryKey: true,
        },
        productMappingId: {
          field: "product_mapping_id",
          type: DataTypes.STRING(36),
          allowNull: false,
          references: {
            model: "product_mappings",
            key: "id",
          },
        },
        slotNo: {
          field: "slot_no",
          type: DataTypes.INTEGER,
          allowNull: true,
        },    
		slotNumber: {
          field: "slot_number",
          type: DataTypes.STRING(36),
          allowNull: true,
        },
        keyNum: {
          field: "keynum",
          type: DataTypes.STRING(2),
          allowNull: true,
        },
        status: {
          field: "status",
          type: DataTypes.TINYINT,
          allowNull: true,
        },
        quantity: {
          field: "quantity",
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        stock: {
          field: "stock",
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        price: {
          field: "price",
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        pickupCode: {
          field: "pickup_code",
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        isPickup: {
          field: "is_pickup",
          type: DataTypes.ENUM("0", "1"),
          allowNull: true,
          defaultValue: "0",
        },
        createdBy: {
          field: "created_by",
          type: DataTypes.STRING(36),
          allowNull: true,
        },
        createdAt: {
          field: "created_at",
          type: DataTypes.DATE,
          allowNull: true,
          // get() {
          //   return Date.parse(this.getDataValue("createdAt"));
          // },
        },
        updatedBy: {
          field: "updated_by",
          type: DataTypes.STRING(36),
          allowNull: true,
        },
        updatedAt: {
          field: "updated_at",
          type: DataTypes.DATE,
          allowNull: true,
          // get() {
          //   return Date.parse(this.getDataValue("updatedAt"));
          // },
        },
        name: {
          field: "name",
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        imageUrl: {
          field: "image_url",
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "product_mapping_details",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "product_mapping_id",
            using: "BTREE",
            fields: [{ name: "product_mapping_id" }],
          },
        ],
      }
    );
    return product_mapping_details;
  }
}
