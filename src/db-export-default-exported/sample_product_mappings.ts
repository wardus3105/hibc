import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { machine_models, machine_modelsId } from './machine_models';
import type { organizations, organizationsId } from './organizations';
import type { sample_product_mappings_details, sample_product_mappings_detailsId } from './sample_product_mappings_details';

export interface sample_product_mappingsAttributes {
  id: string;
  orgId: string;
  modelId: string;
  name?: string;
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
}

export type sample_product_mappingsPk = "id";
export type sample_product_mappingsId = sample_product_mappings[sample_product_mappingsPk];
export type sample_product_mappingsCreationAttributes = Optional<sample_product_mappingsAttributes, sample_product_mappingsPk>;

export class sample_product_mappings extends Model<sample_product_mappingsAttributes, sample_product_mappingsCreationAttributes> implements sample_product_mappingsAttributes {
  id!: string;
  orgId!: string;
  modelId!: string;
  name?: string;
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;

  // sample_product_mappings belongsTo machine_models via model_id
  model!: machine_models;
  getModel!: Sequelize.BelongsToGetAssociationMixin<machine_models>;
  setModel!: Sequelize.BelongsToSetAssociationMixin<machine_models, machine_modelsId>;
  createModel!: Sequelize.BelongsToCreateAssociationMixin<machine_models>;
  // sample_product_mappings belongsTo organizations via org_id
  org!: organizations;
  getOrg!: Sequelize.BelongsToGetAssociationMixin<organizations>;
  setOrg!: Sequelize.BelongsToSetAssociationMixin<organizations, organizationsId>;
  createOrg!: Sequelize.BelongsToCreateAssociationMixin<organizations>;
  // sample_product_mappings hasMany sample_product_mappings_details via sample_product_mapping_id
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

// export class sample_product_mappings extends Model {
  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof sample_product_mappings {
    sample_product_mappings.init(
      {
        id: {
          field: "id",
          type: DataTypes.STRING(36),
          allowNull: false,
          primaryKey: true,
        },
        orgId: {
          field: "org_id",
          type: DataTypes.STRING(36),
          allowNull: false,
          references: {
            model: "organizations",
            key: "id",
          },
        },
        modelId: {
          field: "model_id",
          type: DataTypes.STRING(36),
          allowNull: false,
          references: {
            model: "machine_models",
            key: "id",
          },
        },
        name: {
          field: "name",
          type: DataTypes.STRING(255),
          allowNull: true,
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
        },
      },
      {
        sequelize,
        tableName: "sample_product_mappings",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "org_id",
            using: "BTREE",
            fields: [{ name: "org_id" }],
          },
          {
            name: "model_id",
            using: "BTREE",
            fields: [{ name: "model_id" }],
          },
        ],
      }
    );
    return sample_product_mappings;
  }
}
