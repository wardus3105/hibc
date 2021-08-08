import db from '../common/connection-db';
import BaseSequelize from '../core/utils/base-sequelize/BaseSequelize';

import { Article } from '../models/articles';

const model = db.initModels;

export class ArticleDao extends BaseSequelize<Article> {
	constructor() {
		super();
		this.model = model.articles;
	}
}
