import Router from "koa-router";
import { RESULT_CODE, RESULT_MESSAGE } from "../core/constants/result-constants";
import { IDataResult } from "../core/handles/data-result";
import { Article } from "../models/articles";
import { ArticleService } from "../services/articles-service";

const router = new Router({ prefix: "/api/articles" });
const articleService: ArticleService = new ArticleService();

/*router.get("/", async(ctx: any, next: any) => {
	var result: IDataResult = {};
	var bodyArticle: Article = ctx.request.body;

	try {
		var articles: Article[] = await articleService.getAll(bodyArticle);
		result.status = RESULT_CODE.SUCCESS;
		result.data = articles;
		result.message = RESULT_MESSAGE.SUCCESS;
	} catch (error: any) {
		result.data = error;
		result.status = RESULT_CODE.ERROR;
		result.message = RESULT_MESSAGE.ERROR;
	}
	ctx.body = result;
})*/

router.get("/", async(ctx: any, next: any) => {
	var result: IDataResult = {};
	var keyword: string= ctx.request.query.keyword;
	try {
		var articles: Article[] = await articleService.getArticleByKeyword(keyword);
		result.status = RESULT_CODE.SUCCESS;
		result.data = articles;
		result.message = RESULT_MESSAGE.SUCCESS;
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
		var article: Article = await articleService.findById(id);
		result.status = RESULT_CODE.SUCCESS;
		result.data = article;
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
	var bodyArticle: any= ctx.request.body;

	try {
		var article: any= await articleService.create(bodyArticle);
		result.status = RESULT_CODE.SUCCESS;
		result.data = article;
		result.message = RESULT_MESSAGE.SUCCESS;
	} catch (error: any) {
		result.data = error;
		result.status = RESULT_CODE.ERROR;
		result.message = RESULT_MESSAGE.ERROR;
	}
	
	ctx.body = result;

})

export default router;
