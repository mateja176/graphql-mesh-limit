/* eslint-disable class-methods-use-this */

import { Body, Controller, Get, Post, Route, SuccessResponse } from 'tsoa';
import { User } from './user';
import { UserCreationParams, UsersService } from './users.service';

@Route('users')
export class UsersController extends Controller {
  @Get('get')
  public async getUsers(): Promise<User[]> {
    return new UsersService().get();
  }

  @SuccessResponse('201', 'Created')
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<User> {
    this.setStatus(201);

    return new UsersService().create(requestBody);
  }
}
