import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface servicesAttributes {
  id: string;
  name?: string;
  title?: string;
  description?: string;
}

export type servicesPk = "id";
export type servicesId = services[servicesPk];
export type servicesCreationAttributes = Optional<servicesAttributes, servicesPk>;

export class services extends Model<servicesAttributes, servicesCreationAttributes> implements servicesAttributes {
  id!: string;
  name?: string;
  title?: string;
  description?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof services {
    services.init({
    id: {
      type: DataTypes.STRING(24),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'services',
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
  return services;
  }
}
