import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { organizations, organizationsId } from './organizations';

export interface usersAttributes {
  id: string;
  org_id: string;
  email?: string;
  username?: string;
  password?: string;
  reference_name?: string;
  type?: number;
  last_login?: Date;
  created_by?: string;
  created_at?: Date;
  updated_by?: string;
  updated_at?: Date;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersCreationAttributes = Optional<usersAttributes, usersPk>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: string;
  org_id!: string;
  email?: string;
  username?: string;
  password?: string;
  reference_name?: string;
  type?: number;
  last_login?: Date;
  created_by?: string;
  created_at?: Date;
  updated_by?: string;
  updated_at?: Date;

  // users belongsTo organizations via org_id
  org!: organizations;
  getOrg!: Sequelize.BelongsToGetAssociationMixin<organizations>;
  setOrg!: Sequelize.BelongsToSetAssociationMixin<organizations, organizationsId>;
  createOrg!: Sequelize.BelongsToCreateAssociationMixin<organizations>;

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    users.init({
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
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reference_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    last_login: {
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
    tableName: 'users',
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
    ]
  });
  return users;
  }
}
