import { Service } from "../models/services";
import { ServiceDao } from "../dao/service-dao";
import { genGuidId } from "../uuid";

export class ServiceService {
	 serviceDao = new ServiceDao();

	 async getAll(): Promise<Service[]> {
		let services: any = await this.serviceDao.findAll({
		});

		return services;
	 }

	 async findById(id: String): Promise<Service> {
		let service: any = await this.serviceDao.findByPk(id);
		
		return service;
	 }

	 async create(service?: any): Promise<Service> {
		service.id = genGuidId(Service.TABLE_NAME);
		let result: any = await this.serviceDao.create(service);
		return result;
	 }
}
