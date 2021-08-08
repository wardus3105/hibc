export default interface IConfig {
    configId: {
        nodeServer: string,
        objTable: {
            [key: string]: string
        }
    }
}
