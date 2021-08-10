import db from '../common/connection-db';
import BaseSequelize from '../core/utils/base-sequelize/BaseSequelize';

import { Category } from '../models/categories';

const model = db.initModels;

export class CategoryDao extends BaseSequelize<Category> {
	constructor() {
		super();
		this.model = model.categories;
	}
}
