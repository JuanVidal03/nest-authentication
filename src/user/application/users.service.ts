import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/application/prisma.service";

@Injectable()
export class UsersService {
  constructor(private readonly _prismaService: PrismaService) {}

  async findUserByEmail(email: string) {
    const foundUser = await this._prismaService.user.findUnique({
      where: { email },
    });

    if (!foundUser) {
      throw new NotFoundException(
        `The user with email: ${email} has been not found.`,
      );
    }

    return foundUser;
  }
}
