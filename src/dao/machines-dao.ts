import db from "../common/connection-db";
import BaseSequelize from "../core/utils/base-sequelize/BaseSequelize";
import { Machine } from "../models/machines";

const model = db.initModels;

export class MachineDao extends BaseSequelize<Machine> {
    constructor() { 
        super();
        this.model = model.machines;
    }
}
