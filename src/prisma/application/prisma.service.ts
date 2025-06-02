import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from "@nestjs/common";
import { PrismaClient } from "generated/prisma";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log("Databe connected");
    } catch (error) {
      if (error instanceof Error) {
        return this.logger.error(error);
      }
      return this.logger.error("Error conecting to prisma");
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
