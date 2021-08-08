import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface article_tagsAttributes {
  article_id?: string;
  tag_id?: string;
}

export type article_tagsCreationAttributes = article_tagsAttributes;

export class article_tags extends Model<article_tagsAttributes, article_tagsCreationAttributes> implements article_tagsAttributes {
  article_id?: string;
  tag_id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof article_tags {
    article_tags.init({
    article_id: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    tag_id: {
      type: DataTypes.STRING(24),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'article_tags',
    timestamps: false
  });
  return article_tags;
  }
}
