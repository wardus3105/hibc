import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { orders, ordersId } from './orders';
import type { product_mappings, product_mappingsId } from './product_mappings';

export interface product_mapping_detailsAttributes {
  id: string;
  product_mapping_id: string;
  slot_no?: number;
  keynum?: string;
  status?: number;
  quantity?: number;
  stock?: number;
  price?: number;
  pickup_code?: number;
  is_pickup?: '0' | '1';
  created_by?: string;
  created_at?: Date;
  updated_by?: string;
  updated_at?: Date;
  name?: string;
  image_url?: string;
}

export type product_mapping_detailsPk = "id";
export type product_mapping_detailsId = product_mapping_details[product_mapping_detailsPk];
export type product_mapping_detailsCreationAttributes = Optional<product_mapping_detailsAttributes, product_mapping_detailsPk>;

export class product_mapping_details extends Model<product_mapping_detailsAttributes, product_mapping_detailsCreationAttributes> implements product_mapping_detailsAttributes {
  id!: string;
  product_mapping_id!: string;
  slot_no?: number;
  keynum?: string;
  status?: number;
  quantity?: number;
  stock?: number;
  price?: number;
  pickup_code?: number;
  is_pickup?: '0' | '1';
  created_by?: string;
  created_at?: Date;
  updated_by?: string;
  updated_at?: Date;
  name?: string;
  image_url?: string;

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
  setProduct_mapping!: Sequelize.BelongsToSetAssociationMixin<product_mappings, product_mappingsId>;
  createProduct_mapping!: Sequelize.BelongsToCreateAssociationMixin<product_mappings>;

  static initModel(sequelize: Sequelize.Sequelize): typeof product_mapping_details {
    product_mapping_details.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    product_mapping_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'product_mappings',
        key: 'id'
      }
    },
    slot_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    keynum: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pickup_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_pickup: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      defaultValue: "0"
    },
    created_by: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_mapping_details',
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
        name: "product_mapping_id",
        using: "BTREE",
        fields: [
          { name: "product_mapping_id" },
        ]
      },
    ]
  });
  return product_mapping_details;
  }
}
