/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Generation, Monster } from "@prisma/client";

export class GenerationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GenerationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenerationCountArgs>
  ): Promise<number> {
    return this.prisma.generation.count(args);
  }

  async findMany<T extends Prisma.GenerationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenerationFindManyArgs>
  ): Promise<Generation[]> {
    return this.prisma.generation.findMany(args);
  }
  async findOne<T extends Prisma.GenerationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenerationFindUniqueArgs>
  ): Promise<Generation | null> {
    return this.prisma.generation.findUnique(args);
  }
  async create<T extends Prisma.GenerationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenerationCreateArgs>
  ): Promise<Generation> {
    return this.prisma.generation.create<T>(args);
  }
  async update<T extends Prisma.GenerationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenerationUpdateArgs>
  ): Promise<Generation> {
    return this.prisma.generation.update<T>(args);
  }
  async delete<T extends Prisma.GenerationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenerationDeleteArgs>
  ): Promise<Generation> {
    return this.prisma.generation.delete(args);
  }

  async findMonsters(
    parentId: string,
    args: Prisma.MonsterFindManyArgs
  ): Promise<Monster[]> {
    return this.prisma.generation
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .monsters(args);
  }
}
