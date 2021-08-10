import db from '../common/connection-db';
import BaseSequelize from '../core/utils/base-sequelize/BaseSequelize';

import { Service } from '../models/services';

const model = db.initModels;

export class ServiceDao extends BaseSequelize<Service> {
	constructor() {
		super();
		this.model = model.services;
	}
}
