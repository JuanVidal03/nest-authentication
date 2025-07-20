import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "../application/users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get(":email")
  async getUserById(@Param("email") email: string) {
    return this._usersService.findUserByEmail(email);
  }
}
