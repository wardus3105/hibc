import { users } from "../db-export-default-migrated-exported/users";

export class User extends users {
	public static TABLE_NAME = "user";
}
