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
import { CreateTypingArgs } from "./CreateTypingArgs";
import { UpdateTypingArgs } from "./UpdateTypingArgs";
import { DeleteTypingArgs } from "./DeleteTypingArgs";
import { TypingCountArgs } from "./TypingCountArgs";
import { TypingFindManyArgs } from "./TypingFindManyArgs";
import { TypingFindUniqueArgs } from "./TypingFindUniqueArgs";
import { Typing } from "./Typing";
import { MonsterFindManyArgs } from "../../monster/base/MonsterFindManyArgs";
import { Monster } from "../../monster/base/Monster";
import { TypingService } from "../typing.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Typing)
export class TypingResolverBase {
  constructor(
    protected readonly service: TypingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _typingsMeta(
    @graphql.Args() args: TypingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @Public()
  @graphql.Query(() => [Typing])
  async typings(@graphql.Args() args: TypingFindManyArgs): Promise<Typing[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Typing, { nullable: true })
  async typing(
    @graphql.Args() args: TypingFindUniqueArgs
  ): Promise<Typing | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Typing)
  @nestAccessControl.UseRoles({
    resource: "Typing",
    action: "create",
    possession: "any",
  })
  async createTyping(@graphql.Args() args: CreateTypingArgs): Promise<Typing> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Typing)
  @nestAccessControl.UseRoles({
    resource: "Typing",
    action: "update",
    possession: "any",
  })
  async updateTyping(
    @graphql.Args() args: UpdateTypingArgs
  ): Promise<Typing | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Typing)
  @nestAccessControl.UseRoles({
    resource: "Typing",
    action: "delete",
    possession: "any",
  })
  async deleteTyping(
    @graphql.Args() args: DeleteTypingArgs
  ): Promise<Typing | null> {
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
  @graphql.ResolveField(() => [Monster], { name: "monsters" })
  async resolveFieldMonsters(
    @graphql.Parent() parent: Typing,
    @graphql.Args() args: MonsterFindManyArgs
  ): Promise<Monster[]> {
    const results = await this.service.findMonsters(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}