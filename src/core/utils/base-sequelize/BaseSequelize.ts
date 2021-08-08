//import { getOrgIdByUser } from "../../../uuid/index";
import HyperConstants from "./constants";
import { IBaseSequelize } from "./IBaseSequelize";

interface Options {
    [key: string]: any
}

export default class BaseSequelize<T> implements IBaseSequelize<T> {
    model: any;
    constructor(model?: any) {
        this.model = model;
    }
    /**
     * Lấy dữ liệu theo khóa chính tự động chèn org id vào where
     * @param  {any} identifier  Khóa chính
     * @param  {any|undefined} options? Tùy chọn ( docmunent sequelize)
     */
    // Hàm gốc của sequelize
    public async findByPk(identifier: any, options?: any | undefined) {
        return await this.model.findByPk(identifier, options);
    }

    public async create(values?: any, options?: any) {

        return await this.model.create(values, options);
    }
    public async findAll(options?: any | undefined) {

        return await this.model.findAll(options);
    }
    public async update(object: any, options?: any | undefined): Promise<any> {
        await this.model.update(object, options);
    }
    public async count(options?: any | undefined): Promise<number> {
        return await this.model.count(options);
    }
    public async findOne(options?: any | undefined) {
        return await this.model.findOne(options);
    }
    public async findAndCountAll(options?: any | undefined) {
        return await this.model.findAndCountAll(options);
    }
    public async max(field: any, options?: any | undefined) {
        return await this.model.max(field, options);
    }
    public async min(field: any, options?: any | undefined) {
        return await this.model.min(field, options);
    }
    public async sum(field: any, options?: any | undefined): Promise<number> {
        return await this.model.sum(field, options);
    }
    public async destroy(options?: any | undefined): Promise<number> {
        return await this.model.destroy(options);
    }
    /*addOrgIdInOptions(options?: Options | undefined | any) {
        const orgId = getOrgIdByUser();
        if (!options) {
            const newoptions: any = {
                where: {}
            };
            newoptions.where[HyperConstants.orgIdField] = orgId;
            return newoptions;
        }
        if (!options.where) {
            options.where = {};
        }
        options.where[HyperConstants.orgIdField] = orgId;
        return options;
    }*/
}
