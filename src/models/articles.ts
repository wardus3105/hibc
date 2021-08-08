import { articles } from "../db-export-default-migrated-exported/articles";

export class Article extends articles {
	public static TABLE_NAME = "article";
}
