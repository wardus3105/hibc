import Router from "koa-router";
import { RESULT_CODE, RESULT_MESSAGE } from "../core/constants/result-constants";
import { IDataResult } from "../core/handles/data-result";
import { categories } from "../db-export-default-migrated/categories";
import { Category } from "../models/categories";
import { CategoryService } from "../services/categories-service";

const router = new Router({ prefix: "/api/categories" });
const categoryService: CategoryService = new CategoryService();

router.get("/", async(ctx: any, next: any) => {
	var result: IDataResult = {};
	try {
		var categories: Category[] = await categoryService.getAll();
		result.status = RESULT_CODE.SUCCESS;
		result.data = categories;
		result.message= RESULT_MESSAGE.SUCCESS;
	} catch (error: any) {
		result.data = error;
		result.status = RESULT_CODE.ERROR;
		result.message = RESULT_MESSAGE.ERROR;
	}
	ctx.body = result;
})

router.get("/:id", async(ctx: any, next: any) => {
	var result: IDataResult = {};
	var id: any= ctx.params.id;
	console.log(id);
	try {
		var catetogy: Category= await categoryService.findById(id);
		result.status = RESULT_CODE.SUCCESS;
		result.data = catetogy;
		result.message = RESULT_MESSAGE.SUCCESS;
	} catch (error: any) {
		result.data = error;
		result.status = RESULT_CODE.ERROR;
		result.message = RESULT_MESSAGE.ERROR;
	}
	ctx.body = result;
})

router.post("/", async(ctx: any, next: any) => {
	var result: IDataResult = {};
	var body: Category = ctx.request.body;

	try {
		var category: Category= await categoryService.create(body);
		result.status = RESULT_CODE.SUCCESS;
		result.data = category;
		result.message = RESULT_MESSAGE.SUCCESS;
	} catch (error: any) {
		result.data = error;
		result.status = RESULT_CODE.ERROR;
		result.message = RESULT_MESSAGE.ERROR;
	}
	
	ctx.body = result;

})

export default router;
