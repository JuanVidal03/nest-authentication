import { Controller, Get, HttpStatus, Param } from "@nestjs/common";
import { UsersService } from "../application/users.service";
import { UserResponse } from "../domain/interfaces/user.interface";

@Controller("users")
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get(":email")
  async getUserById(@Param("email") email: string): Promise<UserResponse> {
    const user = await this._usersService.findUserByEmail(email);

    return {
      statusCode: HttpStatus.OK,
      message: "User found successfully!",
      data: user,
    };
  }
}
