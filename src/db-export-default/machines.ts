import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { machine_models, machine_modelsId } from './machine_models';
import type { machine_types, machine_typesId } from './machine_types';
import type { organizations, organizationsId } from './organizations';
import type { product_mappings, product_mappingsId } from './product_mappings';

export interface machinesAttributes {
  id: string;
  org_id: string;
  model_id: string;
  typel_id: string;
  serial_number?: string;
  type?: '1' | '2';
  reference_name?: string;
  status?: number;
  capacity?: number;
  last_active_check?: Date;
  created_by?: string;
  created_at?: Date;
  updated_by?: string;
  updated_at?: Date;
}

export type machinesPk = "id";
export type machinesId = machines[machinesPk];
export type machinesCreationAttributes = Optional<machinesAttributes, machinesPk>;

export class machines extends Model<machinesAttributes, machinesCreationAttributes> implements machinesAttributes {
  id!: string;
  org_id!: string;
  model_id!: string;
  typel_id!: string;
  serial_number?: string;
  type?: '1' | '2';
  reference_name?: string;
  status?: number;
  capacity?: number;
  last_active_check?: Date;
  created_by?: string;
  created_at?: Date;
  updated_by?: string;
  updated_at?: Date;

  // machines belongsTo machine_models via model_id
  model!: machine_models;
  getModel!: Sequelize.BelongsToGetAssociationMixin<machine_models>;
  setModel!: Sequelize.BelongsToSetAssociationMixin<machine_models, machine_modelsId>;
  createModel!: Sequelize.BelongsToCreateAssociationMixin<machine_models>;
  // machines belongsTo machine_types via typel_id
  typel!: machine_types;
  getTypel!: Sequelize.BelongsToGetAssociationMixin<machine_types>;
  setTypel!: Sequelize.BelongsToSetAssociationMixin<machine_types, machine_typesId>;
  createTypel!: Sequelize.BelongsToCreateAssociationMixin<machine_types>;
  // machines hasMany product_mappings via machine_id
  product_mappings!: product_mappings[];
  getProduct_mappings!: Sequelize.HasManyGetAssociationsMixin<product_mappings>;
  setProduct_mappings!: Sequelize.HasManySetAssociationsMixin<product_mappings, product_mappingsId>;
  addProduct_mapping!: Sequelize.HasManyAddAssociationMixin<product_mappings, product_mappingsId>;
  addProduct_mappings!: Sequelize.HasManyAddAssociationsMixin<product_mappings, product_mappingsId>;
  createProduct_mapping!: Sequelize.HasManyCreateAssociationMixin<product_mappings>;
  removeProduct_mapping!: Sequelize.HasManyRemoveAssociationMixin<product_mappings, product_mappingsId>;
  removeProduct_mappings!: Sequelize.HasManyRemoveAssociationsMixin<product_mappings, product_mappingsId>;
  hasProduct_mapping!: Sequelize.HasManyHasAssociationMixin<product_mappings, product_mappingsId>;
  hasProduct_mappings!: Sequelize.HasManyHasAssociationsMixin<product_mappings, product_mappingsId>;
  countProduct_mappings!: Sequelize.HasManyCountAssociationsMixin;
  // machines belongsTo organizations via org_id
  org!: organizations;
  getOrg!: Sequelize.BelongsToGetAssociationMixin<organizations>;
  setOrg!: Sequelize.BelongsToSetAssociationMixin<organizations, organizationsId>;
  createOrg!: Sequelize.BelongsToCreateAssociationMixin<organizations>;

  static initModel(sequelize: Sequelize.Sequelize): typeof machines {
    machines.init({
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
    model_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'machine_models',
        key: 'id'
      }
    },
    typel_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'machine_types',
        key: 'id'
      }
    },
    serial_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('1','2'),
      allowNull: true
    },
    reference_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_active_check: {
      type: DataTypes.DATE,
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
    tableName: 'machines',
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
        name: "model_id",
        using: "BTREE",
        fields: [
          { name: "model_id" },
        ]
      },
      {
        name: "typel_id",
        using: "BTREE",
        fields: [
          { name: "typel_id" },
        ]
      },
    ]
  });
  return machines;
  }
}
