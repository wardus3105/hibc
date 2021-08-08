import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { product_mapping_details, product_mapping_detailsId } from './product_mapping_details';
import { genGuidId } from "../uuid";

export interface ordersAttributes {
  id: string;
  product_mapping_detail_id: string;
  pay_type?: '0' | '1';
  status?: '0' | '1' | '2';
  amount?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type ordersPk = "id";
export type ordersId = orders[ordersPk];
export type ordersCreationAttributes = Optional<ordersAttributes, ordersPk>;

export class orders extends Model<ordersAttributes, ordersCreationAttributes> implements ordersAttributes {
  id!: string;
  product_mapping_detail_id!: string;
  pay_type?: '0' | '1';
  status?: '0' | '1' | '2';
  amount?: number;
  created_at?: Date;
  updated_at?: Date;

  // orders belongsTo product_mapping_details via product_mapping_detail_id
  product_mapping_detail!: product_mapping_details;
  getProduct_mapping_detail!: Sequelize.BelongsToGetAssociationMixin<product_mapping_details>;
  setProduct_mapping_detail!: Sequelize.BelongsToSetAssociationMixin<product_mapping_details, product_mapping_detailsId>;
  createProduct_mapping_detail!: Sequelize.BelongsToCreateAssociationMixin<product_mapping_details>;

  static initModel(sequelize: Sequelize.Sequelize): typeof orders {
    orders.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    product_mapping_detail_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'product_mapping_details',
        key: 'id'
      }
    },
    pay_type: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      get(this: any) {
          return this.getDataValue('created_at').getTime();
      }

    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      get(this: any) {
          return this.getDataValue('updated_at').getTime();
      }
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
 /*   defines: {
        hooks: {
            beforeCreate: (order:any ,options:any) => {
                order.id = genGuidId("orders");
                console.log("test",order);
            } 
        }
    },*/
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
        name: "product_mapping_detail_id",
        using: "BTREE",
        fields: [
          { name: "product_mapping_detail_id" },
        ]
      },
    ]
  });
  return orders;
  }
}
