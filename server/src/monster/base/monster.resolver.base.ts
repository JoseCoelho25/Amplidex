/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateMonsterArgs } from "./CreateMonsterArgs";
import { UpdateMonsterArgs } from "./UpdateMonsterArgs";
import { DeleteMonsterArgs } from "./DeleteMonsterArgs";
import { MonsterCountArgs } from "./MonsterCountArgs";
import { MonsterFindManyArgs } from "./MonsterFindManyArgs";
import { MonsterFindUniqueArgs } from "./MonsterFindUniqueArgs";
import { Monster } from "./Monster";
import { TypingFindManyArgs } from "../../typing/base/TypingFindManyArgs";
import { Typing } from "../../typing/base/Typing";
import { Generation } from "../../generation/base/Generation";
import { MonsterService } from "../monster.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Monster)
export class MonsterResolverBase {
  constructor(
    protected readonly service: MonsterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _monstersMeta(
    @graphql.Args() args: MonsterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @Public()
  @graphql.Query(() => [Monster])
  async monsters(
    @graphql.Args() args: MonsterFindManyArgs
  ): Promise<Monster[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Monster, { nullable: true })
  async monster(
    @graphql.Args() args: MonsterFindUniqueArgs
  ): Promise<Monster | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Monster)
  @nestAccessControl.UseRoles({
    resource: "Monster",
    action: "create",
    possession: "any",
  })
  async createMonster(
    @graphql.Args() args: CreateMonsterArgs
  ): Promise<Monster> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        generation: {
          connect: args.data.generation,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Monster)
  @nestAccessControl.UseRoles({
    resource: "Monster",
    action: "update",
    possession: "any",
  })
  async updateMonster(
    @graphql.Args() args: UpdateMonsterArgs
  ): Promise<Monster | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          generation: {
            connect: args.data.generation,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Monster)
  @nestAccessControl.UseRoles({
    resource: "Monster",
    action: "delete",
    possession: "any",
  })
  async deleteMonster(
    @graphql.Args() args: DeleteMonsterArgs
  ): Promise<Monster | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @graphql.ResolveField(() => [Typing], { name: "typing" })
  async resolveFieldTyping(
    @graphql.Parent() parent: Monster,
    @graphql.Args() args: TypingFindManyArgs
  ): Promise<Typing[]> {
    const results = await this.service.findTyping(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @Public()
  @graphql.ResolveField(() => Generation, {
    nullable: true,
    name: "generation",
  })
  async resolveFieldGeneration(
    @graphql.Parent() parent: Monster
  ): Promise<Generation | null> {
    const result = await this.service.getGeneration(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
