import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { organizations, organizationsId } from './organizations';
import type { product_types, product_typesId } from './product_types';
import type { sample_product_mappings_details, sample_product_mappings_detailsId } from './sample_product_mappings_details';

export interface productsAttributes {
  id: string;
  org_id: string;
  product_type_id: string;
  name?: string;
  group_id?: string;
  type?: '1' | '2';
  general_price?: number;
  image_url?: string;
  image_detail_url?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type productsPk = "id";
export type productsId = products[productsPk];
export type productsCreationAttributes = Optional<productsAttributes, productsPk>;

export class products extends Model<productsAttributes, productsCreationAttributes> implements productsAttributes {
  id!: string;
  org_id!: string;
  product_type_id!: string;
  name?: string;
  group_id?: string;
  type?: '1' | '2';
  general_price?: number;
  image_url?: string;
  image_detail_url?: string;
  created_at?: Date;
  updated_at?: Date;

  // products belongsTo organizations via org_id
  org!: organizations;
  getOrg!: Sequelize.BelongsToGetAssociationMixin<organizations>;
  setOrg!: Sequelize.BelongsToSetAssociationMixin<organizations, organizationsId>;
  createOrg!: Sequelize.BelongsToCreateAssociationMixin<organizations>;
  // products belongsTo product_types via product_type_id
  product_type!: product_types;
  getProduct_type!: Sequelize.BelongsToGetAssociationMixin<product_types>;
  setProduct_type!: Sequelize.BelongsToSetAssociationMixin<product_types, product_typesId>;
  createProduct_type!: Sequelize.BelongsToCreateAssociationMixin<product_types>;
  // products hasMany sample_product_mappings_details via product_id
  sample_product_mappings_details!: sample_product_mappings_details[];
  getSample_product_mappings_details!: Sequelize.HasManyGetAssociationsMixin<sample_product_mappings_details>;
  setSample_product_mappings_details!: Sequelize.HasManySetAssociationsMixin<sample_product_mappings_details, sample_product_mappings_detailsId>;
  addSample_product_mappings_detail!: Sequelize.HasManyAddAssociationMixin<sample_product_mappings_details, sample_product_mappings_detailsId>;
  addSample_product_mappings_details!: Sequelize.HasManyAddAssociationsMixin<sample_product_mappings_details, sample_product_mappings_detailsId>;
  createSample_product_mappings_detail!: Sequelize.HasManyCreateAssociationMixin<sample_product_mappings_details>;
  removeSample_product_mappings_detail!: Sequelize.HasManyRemoveAssociationMixin<sample_product_mappings_details, sample_product_mappings_detailsId>;
  removeSample_product_mappings_details!: Sequelize.HasManyRemoveAssociationsMixin<sample_product_mappings_details, sample_product_mappings_detailsId>;
  hasSample_product_mappings_detail!: Sequelize.HasManyHasAssociationMixin<sample_product_mappings_details, sample_product_mappings_detailsId>;
  hasSample_product_mappings_details!: Sequelize.HasManyHasAssociationsMixin<sample_product_mappings_details, sample_product_mappings_detailsId>;
  countSample_product_mappings_details!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof products {
    products.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'organizations',
        key: 'id'
      }
    },
    product_type_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'product_types',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    group_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('1','2'),
      allowNull: true
    },
    general_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image_detail_url: {
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
    tableName: 'products',
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
        name: "org_id",
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
      {
        name: "product_type_id",
        using: "BTREE",
        fields: [
          { name: "product_type_id" },
        ]
      },
    ]
  });
  return products;
  }
}
