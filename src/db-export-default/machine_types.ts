import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { machines, machinesId } from './machines';

export interface machine_typesAttributes {
  id: string;
  name?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
}

export type machine_typesPk = "id";
export type machine_typesId = machine_types[machine_typesPk];
export type machine_typesCreationAttributes = Optional<machine_typesAttributes, machine_typesPk>;

export class machine_types extends Model<machine_typesAttributes, machine_typesCreationAttributes> implements machine_typesAttributes {
  id!: string;
  name?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;

  // machine_types hasMany machines via typel_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof machine_types {
    machine_types.init({
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
    tableName: 'machine_types',
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
  return machine_types;
  }
}
