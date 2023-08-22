import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GenerationModuleBase } from "./base/generation.module.base";
import { GenerationService } from "./generation.service";
import { GenerationController } from "./generation.controller";
import { GenerationResolver } from "./generation.resolver";

@Module({
  imports: [GenerationModuleBase, forwardRef(() => AuthModule)],
  controllers: [GenerationController],
  providers: [GenerationService, GenerationResolver],
  exports: [GenerationService],
})
export class GenerationModule {}
