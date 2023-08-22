import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TypingModuleBase } from "./base/typing.module.base";
import { TypingService } from "./typing.service";
import { TypingController } from "./typing.controller";
import { TypingResolver } from "./typing.resolver";

@Module({
  imports: [TypingModuleBase, forwardRef(() => AuthModule)],
  controllers: [TypingController],
  providers: [TypingService, TypingResolver],
  exports: [TypingService],
})
export class TypingModule {}
