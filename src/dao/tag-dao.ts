import db from '../common/connection-db';
import BaseSequelize from '../core/utils/base-sequelize/BaseSequelize';

import { Tag } from '../models/tags';

const model = db.initModels;

export class TagDao extends BaseSequelize<Tag> {
	constructor() {
		super();
		this.model = model.tags;
	}
}
