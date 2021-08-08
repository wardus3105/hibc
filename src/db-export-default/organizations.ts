import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { machines, machinesId } from './machines';
import type { products, productsId } from './products';
import type { sample_product_mappings, sample_product_mappingsId } from './sample_product_mappings';
import type { users, usersId } from './users';

export interface organizationsAttributes {
  id: string;
  name?: string;
  created_by?: string;
  created_at?: Date;
  updated_by?: string;
  updated_at?: Date;
}

export type organizationsPk = "id";
export type organizationsId = organizations[organizationsPk];
export type organizationsCreationAttributes = Optional<organizationsAttributes, organizationsPk>;

export class organizations extends Model<organizationsAttributes, organizationsCreationAttributes> implements organizationsAttributes {
  id!: string;
  name?: string;
  created_by?: string;
  created_at?: Date;
  updated_by?: string;
  updated_at?: Date;

  // organizations hasMany machines via org_id
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
  // organizations hasMany products via org_id
  products!: products[];
  getProducts!: Sequelize.HasManyGetAssociationsMixin<products>;
  setProducts!: Sequelize.HasManySetAssociationsMixin<products, productsId>;
  addProduct!: Sequelize.HasManyAddAssociationMixin<products, productsId>;
  addProducts!: Sequelize.HasManyAddAssociationsMixin<products, productsId>;
  createProduct!: Sequelize.HasManyCreateAssociationMixin<products>;
  removeProduct!: Sequelize.HasManyRemoveAssociationMixin<products, productsId>;
  removeProducts!: Sequelize.HasManyRemoveAssociationsMixin<products, productsId>;
  hasProduct!: Sequelize.HasManyHasAssociationMixin<products, productsId>;
  hasProducts!: Sequelize.HasManyHasAssociationsMixin<products, productsId>;
  countProducts!: Sequelize.HasManyCountAssociationsMixin;
  // organizations hasMany sample_product_mappings via org_id
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
  // organizations hasMany users via org_id
  users!: users[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<users>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<users, usersId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<users, usersId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<users, usersId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<users>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<users, usersId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<users, usersId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<users, usersId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<users, usersId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof organizations {
    organizations.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
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
    tableName: 'organizations',
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
    ]
  });
  return organizations;
  }
}
