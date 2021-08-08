import { User } from "../../../models/user";
import IConfig from "../../config-interface";
import client from "./elastic-search-config";

const config: IConfig = require("../../../../appConfig.json");

const addmappingToIndex = async (mapping: any) => {
  console.log("🚀 ~ file: add-mapping-index.ts ~ line 8 ~ mapping", mapping);
  const inputMap = {
    index: config.elasticSearch.index,
    type: config.elasticSearch.mapppingType,
    include_type_name: true,
    body: mapping,
  };
  console.log("🚀 ~ file: add-mapping-index.ts ~ line 16 ~ inputMap", inputMap);
  return await client.indices.putMapping(inputMap);
};

// quyennq hàm thêm mapping bảng chat
async function addMappingChat() {
  const mapping = {
    properties: {
      id: {
        type: "keyword",//search theo từng từ
      },
      message: {
        type: "text",//search theo từng ký tự
      },
      userId: {
        type: "keyword",
      },
      chatRoomId: {
        type: "keyword",
      },
      avatar: {
        type: "keyword",
      },
      title: {
        type: "text",
      },
      userName: {
        type: "text",
      },
      status: {
        type: "keyword",
      },
    },
  };
  try {
    const resp = await addmappingToIndex(mapping);
    console.log(
      "🚀 ~ file: add-mapping-index.ts ~ line 37 ~ addMappingChat ~ resp",
      resp
    );
  } catch (e) {
    console.log(
      "🚀 ~ file: add-mapping-index.ts ~ line 50 ~ addMappingChat ~ e",
      e.body
    );
  }
}

// TODO: thaolt: log request
async function logMappingChat() {
  const mapping = {
    properties: {
      request: {
        type: "keyword",
      },
      response: {
        type: "text",
      },
    },
  };
  try {
    const resp = await addmappingToIndex(mapping);
    console.log(
      "🚀 ~ file: add-mapping-index.ts ~ line 96 ~ logMappingChat ~ resp",
      resp
    );
  } catch (e) {
    console.log(
      "🚀 ~ file: add-mapping-index.ts ~ line 98 ~ logMappingChat ~ e",
      e
    );
  }
}

// addMappingChat();

logMappingChat();
// npx ts-node ./src/core/utils/elastic-search/create-index.ts