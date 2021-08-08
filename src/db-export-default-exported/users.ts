import Sequelize, { DataTypes, Model, Optional } from "sequelize";
import type { organizations, organizationsId } from "./organizations";

export interface usersAttributes {
  id: string;
  orgId: string;
  email?: string;
  userName?: string;
  password?: string;
  referenceName?: string;
  type?: number;
  lastLogin?: Date;
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersCreationAttributes = Optional<usersAttributes, usersPk>;

export class users
  extends Model<usersAttributes, usersCreationAttributes>
  implements usersAttributes {
  id!: string;
  orgId!: string;
  email?: string;
  userName?: string;
  password?: string;
  referenceName?: string;
  type?: number;
  lastLogin?: Date;
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;

  // users belongsTo organizations via org_id
  org!: organizations;
  getOrg!: Sequelize.BelongsToGetAssociationMixin<organizations>;
  setOrg!: Sequelize.BelongsToSetAssociationMixin<
    organizations,
    organizationsId
  >;
  createOrg!: Sequelize.BelongsToCreateAssociationMixin<organizations>;

  // export class users extends Model {
  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    users.init(
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
        email: {
          field: "email",
          type: DataTypes.STRING(45),
          allowNull: true,
        },
        userName: {
          field: "username",
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        password: {
          field: "password",
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        referenceName: {
          field: "reference_name",
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        type: {
          field: "type",
          type: DataTypes.TINYINT,
          allowNull: true,
        },
        lastLogin: {
          field: "last_login",
          type: DataTypes.DATE,
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
        tableName: "users",
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
        ],
      }
    );
    return users;
  }
}
