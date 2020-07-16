import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ForbiddenError } from 'apollo-server-express'

@Resolver()
export class ItemResolver {
	@Query(() => String, { nullable: true })
	async itemList(): Promise<any | Error> {
		
		return "Test aa"
	}
}
