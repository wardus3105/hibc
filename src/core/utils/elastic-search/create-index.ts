import client from "./elastic-search-config";
import IConfig from "../../config-interface";

const config: IConfig = require('../../../../appConfig.json')
client.indices.create({
    index: config.elasticSearchLog.index
}, {}, (err, resp) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("create index ", resp);
    }
});

// npx ts-node ./src/core/utils/elastic-search/create-index.ts