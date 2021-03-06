import Router from "koa-router";
import { RESULT_CODE, RESULT_MESSAGE } from "../core/constants/result-constants";
import { IDataResult } from "../core/handles/data-result";
import { Service } from "../models/services";
import { ServiceService} from "../services/services-service";

const router = new Router({ prefix: "/api/services" });
const serviceService: ServiceService = new ServiceService();

router.get("/", async(ctx: any, next: any) => {
	var result: IDataResult = {};
	try {
		var services: Service[] = await serviceService.getAll();
		result.status = RESULT_CODE.SUCCESS;
		result.data = services;
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
	var id: any= ctx.query.id;
	console.log(id);
	try {
		var service: Service= await serviceService.findById(id);
		result.status = RESULT_CODE.SUCCESS;
		result.data = service;
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
	var body: Service = ctx.request.body;

	try {
		var service: Service= await serviceService.create(body);
		result.status = RESULT_CODE.SUCCESS;
		result.data = service;
		result.message = RESULT_MESSAGE.SUCCESS;
	} catch (error: any) {
		result.data = error;
		result.status = RESULT_CODE.ERROR;
		result.message = RESULT_MESSAGE.ERROR;
	}
	
	ctx.body = result;

})

export default router;
