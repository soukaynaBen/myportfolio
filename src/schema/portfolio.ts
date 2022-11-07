import { ObjectType,Field,ID } from "type-graphql";

@ObjectType()
export class Portfolio{
     @Field(()=> ID)
     name: string;
}