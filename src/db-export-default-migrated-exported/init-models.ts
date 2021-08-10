import type { Sequelize, Model } from "sequelize";
import { articles } from "./articles";
import type { articlesAttributes, articlesCreationAttributes } from "./articles";
import { categories } from "./categories";
import type { categoriesAttributes, categoriesCreationAttributes } from "./categories";
import { services } from "./services";
import type { servicesAttributes, servicesCreationAttributes } from "./services";
import { users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  articles,
  categories,
  services,
  users,
};

export type {
  articlesAttributes,
  articlesCreationAttributes,
  categoriesAttributes,
  categoriesCreationAttributes,
  servicesAttributes,
  servicesCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  articles.initModel(sequelize);
  categories.initModel(sequelize);
  services.initModel(sequelize);
  users.initModel(sequelize);

  //users.hasMany(articles, { as: "articles", foreignKey: "author_id"});
  articles.belongsTo(users, { as: "author", foreignKey: "author_id"});

  return {
    articles: articles,
    categories: categories,
    services: services,
    users: users,
  };
}
