import type { Sequelize, Model } from "sequelize";
import { machine_models } from "./machine_models";
// import type { machine_modelsAttributes, machine_modelsCreationAttributes } from "./machine_models";
import { machine_types } from "./machine_types";
// import type { machine_typesAttributes, machine_typesCreationAttributes } from "./machine_types";
import { machines } from "./machines";
// import type { machinesAttributes, machinesCreationAttributes } from "./machines";
import { orders } from "./orders";
// import type { ordersAttributes, ordersCreationAttributes } from "./orders";
import { organizations } from "./organizations";
import type { organizationsAttributes, organizationsCreationAttributes } from "./organizations";
import { product_mapping_details } from "./product_mapping_details";
// import type { product_mapping_detailsAttributes, product_mapping_detailsCreationAttributes } from "./product_mapping_details";
import { product_mappings } from "./product_mappings";
// import type { product_mappingsAttributes, product_mappingsCreationAttributes } from "./product_mappings";
import { product_types } from "./product_types"; 
// import type { product_typesAttributes, product_typesCreationAttributes } from "./product_types";
import { products } from "./products";
// import type { productsAttributes, productsCreationAttributes } from "./products";
import { sample_product_mappings } from "./sample_product_mappings";
// import type { sample_product_mappingsAttributes, sample_product_mappingsCreationAttributes } from "./sample_product_mappings";
import { sample_product_mappings_details } from "./sample_product_mappings_details";
// import type { sample_product_mappings_detailsAttributes, sample_product_mappings_detailsCreationAttributes } from "./sample_product_mappings_details";
import { users } from "./users";
// import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  machine_models,
  machine_types,
  machines,
  orders,
  organizations,
  product_mapping_details,
  product_mappings,
  product_types,
  products,
  sample_product_mappings,
  sample_product_mappings_details,
  users,
};

// export type {
//   machine_modelsAttributes,
//   machine_modelsCreationAttributes,
//   machine_typesAttributes,
//   machine_typesCreationAttributes,
//   machinesAttributes,
//   machinesCreationAttributes,
//   ordersAttributes,
//   ordersCreationAttributes,
//   organizationsAttributes,
//   organizationsCreationAttributes,
//   product_mapping_detailsAttributes,
//   product_mapping_detailsCreationAttributes,
//   product_mappingsAttributes,
//   product_mappingsCreationAttributes,
//   product_typesAttributes,
//   product_typesCreationAttributes,
//   productsAttributes,
//   productsCreationAttributes,
//   sample_product_mappingsAttributes,
//   sample_product_mappingsCreationAttributes,
//   sample_product_mappings_detailsAttributes,
//   sample_product_mappings_detailsCreationAttributes,
//   usersAttributes,
//   usersCreationAttributes,
// };

export function initModels(sequelize: Sequelize) {
  machine_models.initModel(sequelize);
  machine_types.initModel(sequelize);
  machines.initModel(sequelize);
  orders.initModel(sequelize);
  organizations.initModel(sequelize);
  product_mapping_details.initModel(sequelize);
  product_mappings.initModel(sequelize);
  product_types.initModel(sequelize);
  products.initModel(sequelize);
  sample_product_mappings.initModel(sequelize);
  sample_product_mappings_details.initModel(sequelize);
  users.initModel(sequelize);

  machines.belongsTo(machine_models, { as: "model", foreignKey: "model_id"});
  machine_models.hasMany(machines, { as: "machines", foreignKey: "model_id"});
  sample_product_mappings.belongsTo(machine_models, { as: "model", foreignKey: "model_id"});
  machine_models.hasMany(sample_product_mappings, { as: "sample_product_mappings", foreignKey: "model_id"});
  machines.belongsTo(machine_types, { as: "typel", foreignKey: "typel_id"});
  machine_types.hasMany(machines, { as: "machines", foreignKey: "typel_id"});
  product_mappings.belongsTo(machines, { as: "machine", foreignKey: "machine_id"});
  machines.hasMany(product_mappings, { as: "product_mappings", foreignKey: "machine_id"});
  machines.belongsTo(organizations, { as: "org", foreignKey: "org_id"});
  organizations.hasMany(machines, { as: "machines", foreignKey: "org_id"});
  products.belongsTo(organizations, { as: "org", foreignKey: "org_id"});
  organizations.hasMany(products, { as: "products", foreignKey: "org_id"});
  sample_product_mappings.belongsTo(organizations, { as: "org", foreignKey: "org_id"});
  organizations.hasMany(sample_product_mappings, { as: "sample_product_mappings", foreignKey: "org_id"});
  users.belongsTo(organizations, { as: "org", foreignKey: "org_id"});
  organizations.hasMany(users, { as: "users", foreignKey: "org_id"});
  orders.belongsTo(product_mapping_details, { as: "product_mapping_detail", foreignKey: "product_mapping_detail_id"});
  product_mapping_details.hasMany(orders, { as: "orders", foreignKey: "product_mapping_detail_id"});
  product_mapping_details.belongsTo(product_mappings, { foreignKey: "product_mapping_id"});
  product_mappings.hasMany(product_mapping_details, {  foreignKey: "product_mapping_id"});
  products.belongsTo(product_types, { as: "product_type", foreignKey: "product_type_id"});
  product_types.hasMany(products, { as: "products", foreignKey: "product_type_id"});
  sample_product_mappings_details.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(sample_product_mappings_details, { as: "sample_product_mappings_details", foreignKey: "product_id"});
  sample_product_mappings_details.belongsTo(sample_product_mappings, { as: "sample_product_mapping", foreignKey: "sample_product_mapping_id"});
  sample_product_mappings.hasMany(sample_product_mappings_details, { as: "sample_product_mappings_details", foreignKey: "sample_product_mapping_id"});

  return {
    machine_models: machine_models,
    machine_types: machine_types,
    machines: machines,
    orders: orders,
    organizations: organizations,
    product_mapping_details: product_mapping_details,
    product_mappings: product_mappings,
    product_types: product_types,
    products: products,
    sample_product_mappings: sample_product_mappings,
    sample_product_mappings_details: sample_product_mappings_details,
    users: users,
  };
}
