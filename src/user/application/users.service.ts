import { Injectable, NotFoundException, Logger } from "@nestjs/common";
import { PrismaService } from "src/prisma/application/prisma.service";
import { User } from "../domain/interfaces/user.interface";

@Injectable()
export class UsersService {
  constructor(private readonly _prismaService: PrismaService) {}

  private readonly logger = new Logger(UsersService.name);

  async findUserByEmail(email: string): Promise<User> {
    const foundUser = await this._prismaService.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!foundUser) {
      this.logger.error(`User with email ${email} not found.`);
      throw new NotFoundException(
        `The user with email: ${email} has been not found.`,
      );
    }

    this.logger.log(`User with email ${email} found successfully.`);
    return foundUser;
  }
}
