import { Article } from "../models/articles";
import { ArticleDao } from "../dao/article-dao";
import { users } from "../db-export-default-migrated-exported/users";
import { Op } from "sequelize";

export class ArticleService {
	articleDao = new ArticleDao();

	async getArticleByKeyword(keyword?: any): Promise<Article[]> {
		var whereStatement: any = [];
		
		if(keyword) {
			whereStatement.push({
				[Op.or] : {
					title: {[Op.like]: '%' + keyword + '%'},
					content: {[Op.like]: '%' + keyword + '%'},
					tags: {[Op.like]: '%' + keyword + '%'}
				}
			})
		}
		
		var includeStatement: any = [];
		includeStatement.push({
			model: users,
			as: "author"
		})

		let articles: any = await this.articleDao.findAll({
			where: whereStatement,
			include: includeStatement 
		});

		return articles;

	}

	async findById(id: String): Promise<Article> {
		let article: any = await this.articleDao.findOne({
			where: { id: id },
			include: { model: users, as: "author" }
		});

		return article;
	}

	async create(article?: any): Promise<Article> {
		let result: any = await this.articleDao.create(article);
		return result;
	}
}
