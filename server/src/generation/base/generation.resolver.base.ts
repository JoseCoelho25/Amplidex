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
import { CreateGenerationArgs } from "./CreateGenerationArgs";
import { UpdateGenerationArgs } from "./UpdateGenerationArgs";
import { DeleteGenerationArgs } from "./DeleteGenerationArgs";
import { GenerationCountArgs } from "./GenerationCountArgs";
import { GenerationFindManyArgs } from "./GenerationFindManyArgs";
import { GenerationFindUniqueArgs } from "./GenerationFindUniqueArgs";
import { Generation } from "./Generation";
import { MonsterFindManyArgs } from "../../monster/base/MonsterFindManyArgs";
import { Monster } from "../../monster/base/Monster";
import { GenerationService } from "../generation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Generation)
export class GenerationResolverBase {
  constructor(
    protected readonly service: GenerationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _generationsMeta(
    @graphql.Args() args: GenerationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @Public()
  @graphql.Query(() => [Generation])
  async generations(
    @graphql.Args() args: GenerationFindManyArgs
  ): Promise<Generation[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Generation, { nullable: true })
  async generation(
    @graphql.Args() args: GenerationFindUniqueArgs
  ): Promise<Generation | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Generation)
  @nestAccessControl.UseRoles({
    resource: "Generation",
    action: "create",
    possession: "any",
  })
  async createGeneration(
    @graphql.Args() args: CreateGenerationArgs
  ): Promise<Generation> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Generation)
  @nestAccessControl.UseRoles({
    resource: "Generation",
    action: "update",
    possession: "any",
  })
  async updateGeneration(
    @graphql.Args() args: UpdateGenerationArgs
  ): Promise<Generation | null> {
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

  @graphql.Mutation(() => Generation)
  @nestAccessControl.UseRoles({
    resource: "Generation",
    action: "delete",
    possession: "any",
  })
  async deleteGeneration(
    @graphql.Args() args: DeleteGenerationArgs
  ): Promise<Generation | null> {
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
    @graphql.Parent() parent: Generation,
    @graphql.Args() args: MonsterFindManyArgs
  ): Promise<Monster[]> {
    const results = await this.service.findMonsters(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}