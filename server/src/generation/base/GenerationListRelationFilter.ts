/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GenerationWhereInput } from "./GenerationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GenerationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GenerationWhereInput,
  })
  @ValidateNested()
  @Type(() => GenerationWhereInput)
  @IsOptional()
  @Field(() => GenerationWhereInput, {
    nullable: true,
  })
  every?: GenerationWhereInput;

  @ApiProperty({
    required: false,
    type: () => GenerationWhereInput,
  })
  @ValidateNested()
  @Type(() => GenerationWhereInput)
  @IsOptional()
  @Field(() => GenerationWhereInput, {
    nullable: true,
  })
  some?: GenerationWhereInput;

  @ApiProperty({
    required: false,
    type: () => GenerationWhereInput,
  })
  @ValidateNested()
  @Type(() => GenerationWhereInput)
  @IsOptional()
  @Field(() => GenerationWhereInput, {
    nullable: true,
  })
  none?: GenerationWhereInput;
}
export { GenerationListRelationFilter as GenerationListRelationFilter };
