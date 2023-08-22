/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MonsterService } from "../monster.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Public } from "../../decorators/public.decorator";
import { MonsterCreateInput } from "./MonsterCreateInput";
import { MonsterWhereInput } from "./MonsterWhereInput";
import { MonsterWhereUniqueInput } from "./MonsterWhereUniqueInput";
import { MonsterFindManyArgs } from "./MonsterFindManyArgs";
import { MonsterUpdateInput } from "./MonsterUpdateInput";
import { Monster } from "./Monster";
import { TypingFindManyArgs } from "../../typing/base/TypingFindManyArgs";
import { Typing } from "../../typing/base/Typing";
import { TypingWhereUniqueInput } from "../../typing/base/TypingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MonsterControllerBase {
  constructor(
    protected readonly service: MonsterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Monster })
  @nestAccessControl.UseRoles({
    resource: "Monster",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: MonsterCreateInput): Promise<Monster> {
    return await this.service.create({
      data: {
        ...data,

        generation: {
          connect: data.generation,
        },
      },
      select: {
        biology: true,
        createdAt: true,
        dexNumber: true,

        generation: {
          select: {
            id: true,
          },
        },

        id: true,
        image: true,
        name: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Monster] })
  @ApiNestedQuery(MonsterFindManyArgs)
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Monster[]> {
    const args = plainToClass(MonsterFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        biology: true,
        createdAt: true,
        dexNumber: true,

        generation: {
          select: {
            id: true,
          },
        },

        id: true,
        image: true,
        name: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Monster })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MonsterWhereUniqueInput
  ): Promise<Monster | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        biology: true,
        createdAt: true,
        dexNumber: true,

        generation: {
          select: {
            id: true,
          },
        },

        id: true,
        image: true,
        name: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Monster })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Monster",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MonsterWhereUniqueInput,
    @common.Body() data: MonsterUpdateInput
  ): Promise<Monster | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          generation: {
            connect: data.generation,
          },
        },
        select: {
          biology: true,
          createdAt: true,
          dexNumber: true,

          generation: {
            select: {
              id: true,
            },
          },

          id: true,
          image: true,
          name: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Monster })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Monster",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MonsterWhereUniqueInput
  ): Promise<Monster | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          biology: true,
          createdAt: true,
          dexNumber: true,

          generation: {
            select: {
              id: true,
            },
          },

          id: true,
          image: true,
          name: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Get("/:id/typing")
  @ApiNestedQuery(TypingFindManyArgs)
  async findManyTyping(
    @common.Req() request: Request,
    @common.Param() params: MonsterWhereUniqueInput
  ): Promise<Typing[]> {
    const query = plainToClass(TypingFindManyArgs, request.query);
    const results = await this.service.findTyping(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/typing")
  @nestAccessControl.UseRoles({
    resource: "Monster",
    action: "update",
    possession: "any",
  })
  async connectTyping(
    @common.Param() params: MonsterWhereUniqueInput,
    @common.Body() body: TypingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      typing: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/typing")
  @nestAccessControl.UseRoles({
    resource: "Monster",
    action: "update",
    possession: "any",
  })
  async updateTyping(
    @common.Param() params: MonsterWhereUniqueInput,
    @common.Body() body: TypingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      typing: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/typing")
  @nestAccessControl.UseRoles({
    resource: "Monster",
    action: "update",
    possession: "any",
  })
  async disconnectTyping(
    @common.Param() params: MonsterWhereUniqueInput,
    @common.Body() body: TypingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      typing: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
