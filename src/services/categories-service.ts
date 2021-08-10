import { Category } from "../models/categories";
import { CategoryDao } from "../dao/category-dao";
import { genGuidId } from "../uuid";
import { categories } from "../db-export-default-migrated-exported/categories";

export class CategoryService {
	 categoryDao = new CategoryDao();

	 async getAll(): Promise<Category[]> {
		let categories: any = await this.categoryDao.findAll({});

		return categories;
	 }

	 async findById(id: String): Promise<Category> {
		let category: any = await this.categoryDao.findByPk(id);
		
		return category;
	 }

	 async create(category?: any): Promise<Category> {
		category.id = genGuidId(Category.TABLE_NAME);
		let result: any = await this.categoryDao.create(category);
		return result;
	 }
}
