export interface IBaseSequelize<T> {

    /**
     * Lấy dữ liệu theo khóa chính tự động chèn org id vào where
     * @param  {any} identifier  Khóa chính
     * @param  {any|undefined} options? Tùy chọn ( docmunent sequelize)
     */
    findByPk(identifier: any, options?: any | undefined): Promise<any>;
    create(values?: any, options?: any): Promise<any>;
    findAll(options?: any | undefined): Promise<any>;
    update(object: any, options?: any | undefined): Promise<any>;
    count(options?: any | undefined): Promise<number>;
    findOne(options?: any | undefined): Promise<any>;
    findAndCountAll(options?: any | undefined): Promise<any>;
    max(field: any, options?: any | undefined): Promise<any>;
    min(field: any, options?: any | undefined): Promise<any>;
    sum(field: any, options?: any | undefined): Promise<number>;
    destroy(options?: any | undefined): Promise<number>;
}
