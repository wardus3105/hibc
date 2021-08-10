import Router from "koa-router";
import { RESULT_CODE, RESULT_MESSAGE } from "../core/constants/result-constants";
import { IDataResult } from "../core/handles/data-result";
import { User } from "../models/users";
import { UserService } from "../services/users-service";

const router = new Router({ prefix: "/api/users" });
const userService: UserService = new UserService();

router.get("/", async(ctx: any, next: any) => {
	var result: IDataResult = {};
	var bodyUser: User= ctx.request.body;
	try {
		var users: User[] = await userService.getAll(bodyUser);
		result.status = RESULT_CODE.SUCCESS;
		result.data = users;
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
	var bodyUser: User= ctx.request.body;

	try {
		var user: User= await userService.create(bodyUser);
		result.status = RESULT_CODE.SUCCESS;
		result.data = user;
		result.message = RESULT_MESSAGE.SUCCESS;
	} catch (error: any) {
		result.data = error;
		result.status = RESULT_CODE.ERROR;
		result.message = RESULT_MESSAGE.ERROR;
	}
	
	ctx.body = result;

})

router.put("/", async(ctx: any, next: any) => {
	var result: IDataResult = {};
	var body: User= ctx.request.body;

	try {
		var user: User = await userService.update(body);
		result.status = RESULT_CODE.SUCCESS;
		result.data = user;
		result.message = RESULT_MESSAGE.SUCCESS;
	} catch (error: any) {
		result.data = error;
		result.status = RESULT_CODE.ERROR;
		result.message = RESULT_MESSAGE.ERROR;
	}
	
	ctx.body = result;

})

export default router;
