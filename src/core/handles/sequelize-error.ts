export default class SequelizeError extends Error {
    constructor(public code: number, public message: string) {
        super();
    }
}
