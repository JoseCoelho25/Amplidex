import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MonsterModuleBase } from "./base/monster.module.base";
import { MonsterService } from "./monster.service";
import { MonsterController } from "./monster.controller";
import { MonsterResolver } from "./monster.resolver";

@Module({
  imports: [MonsterModuleBase, forwardRef(() => AuthModule)],
  controllers: [MonsterController],
  providers: [MonsterService, MonsterResolver],
  exports: [MonsterService],
})
export class MonsterModule {}
