import { UserDao } from '../dao/users-dao';
import { User } from '../models/users';
import { genGuidId } from '../uuid';
export class UserService {
	userDao = new UserDao();

	async getAll(user: User): Promise<any> {
		let users: any = await this.userDao.findAll();
		
		return users;
	}

	async create(user: User) {
		user.id = genGuidId(User.TABLE_NAME);
		let dbo: any = await this.userDao.create(user);

		return dbo;
	}

	async update(user: User) {
		let dbo = this.userDao.update({
			username: user.username
		}, {
			where: {
				id: user.id
			}
		})

		return dbo;
	}
}
