/* eslint-disable class-methods-use-this */

import { User } from './user';

// A post request should not contain an id.
export type UserCreationParams = Pick<User, 'name'>;

export class UsersService {
  get(): User[] {
    return [
      {
        id: '1',
        name: 'Jane Doe',
      },
    ];
  }

  create(userCreationParams: UserCreationParams): User {
    return {
      ...userCreationParams,
      id: Math.floor(Math.random() * 10000).toString(),
    };
  }
}
