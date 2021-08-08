import type { Sequelize, Model } from "sequelize";
import { article_tags } from "./article_tags";
import type { article_tagsAttributes, article_tagsCreationAttributes } from "./article_tags";
import { articles } from "./articles";
import type { articlesAttributes, articlesCreationAttributes } from "./articles";
import { categories } from "./categories";
import type { categoriesAttributes, categoriesCreationAttributes } from "./categories";
import { services } from "./services";
import type { servicesAttributes, servicesCreationAttributes } from "./services";
import { tags } from "./tags";
import type { tagsAttributes, tagsCreationAttributes } from "./tags";
import { users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  article_tags,
  articles,
  categories,
  services,
  tags,
  users,
};

export type {
  article_tagsAttributes,
  article_tagsCreationAttributes,
  articlesAttributes,
  articlesCreationAttributes,
  categoriesAttributes,
  categoriesCreationAttributes,
  servicesAttributes,
  servicesCreationAttributes,
  tagsAttributes,
  tagsCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  article_tags.initModel(sequelize);
  articles.initModel(sequelize);
  categories.initModel(sequelize);
  services.initModel(sequelize);
  tags.initModel(sequelize);
  users.initModel(sequelize);


  return {
    article_tags: article_tags,
    articles: articles,
    categories: categories,
    services: services,
    tags: tags,
    users: users,
  };
}
