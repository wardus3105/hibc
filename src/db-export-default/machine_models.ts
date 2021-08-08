import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { machines, machinesId } from './machines';
import type { sample_product_mappings, sample_product_mappingsId } from './sample_product_mappings';

export interface machine_modelsAttributes {
  id: string;
  name?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type machine_modelsPk = "id";
export type machine_modelsId = machine_models[machine_modelsPk];
export type machine_modelsCreationAttributes = Optional<machine_modelsAttributes, machine_modelsPk>;

export class machine_models extends Model<machine_modelsAttributes, machine_modelsCreationAttributes> implements machine_modelsAttributes {
  id!: string;
  name?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;

  // machine_models hasMany machines via model_id
  machines!: machines[];
  getMachines!: Sequelize.HasManyGetAssociationsMixin<machines>;
  setMachines!: Sequelize.HasManySetAssociationsMixin<machines, machinesId>;
  addMachine!: Sequelize.HasManyAddAssociationMixin<machines, machinesId>;
  addMachines!: Sequelize.HasManyAddAssociationsMixin<machines, machinesId>;
  createMachine!: Sequelize.HasManyCreateAssociationMixin<machines>;
  removeMachine!: Sequelize.HasManyRemoveAssociationMixin<machines, machinesId>;
  removeMachines!: Sequelize.HasManyRemoveAssociationsMixin<machines, machinesId>;
  hasMachine!: Sequelize.HasManyHasAssociationMixin<machines, machinesId>;
  hasMachines!: Sequelize.HasManyHasAssociationsMixin<machines, machinesId>;
  countMachines!: Sequelize.HasManyCountAssociationsMixin;
  // machine_models hasMany sample_product_mappings via model_id
  sample_product_mappings!: sample_product_mappings[];
  getSample_product_mappings!: Sequelize.HasManyGetAssociationsMixin<sample_product_mappings>;
  setSample_product_mappings!: Sequelize.HasManySetAssociationsMixin<sample_product_mappings, sample_product_mappingsId>;
  addSample_product_mapping!: Sequelize.HasManyAddAssociationMixin<sample_product_mappings, sample_product_mappingsId>;
  addSample_product_mappings!: Sequelize.HasManyAddAssociationsMixin<sample_product_mappings, sample_product_mappingsId>;
  createSample_product_mapping!: Sequelize.HasManyCreateAssociationMixin<sample_product_mappings>;
  removeSample_product_mapping!: Sequelize.HasManyRemoveAssociationMixin<sample_product_mappings, sample_product_mappingsId>;
  removeSample_product_mappings!: Sequelize.HasManyRemoveAssociationsMixin<sample_product_mappings, sample_product_mappingsId>;
  hasSample_product_mapping!: Sequelize.HasManyHasAssociationMixin<sample_product_mappings, sample_product_mappingsId>;
  hasSample_product_mappings!: Sequelize.HasManyHasAssociationsMixin<sample_product_mappings, sample_product_mappingsId>;
  countSample_product_mappings!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof machine_models {
    machine_models.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
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
    tableName: 'machine_models',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return machine_models;
  }
}
