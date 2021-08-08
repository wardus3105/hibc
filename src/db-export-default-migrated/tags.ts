import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface tagsAttributes {
  id: string;
  name?: string;
}

export type tagsPk = "id";
export type tagsId = tags[tagsPk];
export type tagsCreationAttributes = Optional<tagsAttributes, tagsPk>;

export class tags extends Model<tagsAttributes, tagsCreationAttributes> implements tagsAttributes {
  id!: string;
  name?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tags {
    tags.init({
    id: {
      type: DataTypes.STRING(24),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tags',
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
  return tags;
  }
}
