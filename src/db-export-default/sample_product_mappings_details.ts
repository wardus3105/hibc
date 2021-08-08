import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { products, productsId } from './products';
import type { sample_product_mappings, sample_product_mappingsId } from './sample_product_mappings';

export interface sample_product_mappings_detailsAttributes {
  id: string;
  product_id: string;
  sample_product_mapping_id: string;
  slot_no?: number;
  quantity?: number;
  created_by?: string;
  created_at?: Date;
  updated_by?: string;
  updated_at?: Date;
}

export type sample_product_mappings_detailsPk = "id";
export type sample_product_mappings_detailsId = sample_product_mappings_details[sample_product_mappings_detailsPk];
export type sample_product_mappings_detailsCreationAttributes = Optional<sample_product_mappings_detailsAttributes, sample_product_mappings_detailsPk>;

export class sample_product_mappings_details extends Model<sample_product_mappings_detailsAttributes, sample_product_mappings_detailsCreationAttributes> implements sample_product_mappings_detailsAttributes {
  id!: string;
  product_id!: string;
  sample_product_mapping_id!: string;
  slot_no?: number;
  quantity?: number;
  created_by?: string;
  created_at?: Date;
  updated_by?: string;
  updated_at?: Date;

  // sample_product_mappings_details belongsTo products via product_id
  product!: products;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<products>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<products, productsId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<products>;
  // sample_product_mappings_details belongsTo sample_product_mappings via sample_product_mapping_id
  sample_product_mapping!: sample_product_mappings;
  getSample_product_mapping!: Sequelize.BelongsToGetAssociationMixin<sample_product_mappings>;
  setSample_product_mapping!: Sequelize.BelongsToSetAssociationMixin<sample_product_mappings, sample_product_mappingsId>;
  createSample_product_mapping!: Sequelize.BelongsToCreateAssociationMixin<sample_product_mappings>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sample_product_mappings_details {
    sample_product_mappings_details.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    sample_product_mapping_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'sample_product_mappings',
        key: 'id'
      }
    },
    slot_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'sample_product_mappings_details',
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
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "sample_product_mapping_id",
        using: "BTREE",
        fields: [
          { name: "sample_product_mapping_id" },
        ]
      },
    ]
  });
  return sample_product_mappings_details;
  }
}
