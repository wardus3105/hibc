import { Article } from "../models/articles";
import { ArticleDao } from "../dao/article-dao";
import db from "../common/connection-db";
import { genGuidId } from "../uuid";

export class ArticleService {
	 articleDao = new ArticleDao();

	 async getAll(article?: Article): Promise<Article[]> {
		let articles: any = await this.articleDao.findAll({
			where: article
		});

		return articles;
	 }

	 async create(article?: any): Promise<Article> {
		article.id = genGuidId(Article.TABLE_NAME);
		let result: any = await this.articleDao.create(article);
		return result;
	 }
}
