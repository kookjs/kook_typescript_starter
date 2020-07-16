import { injectable } from "inversify";

import { getApp } from "@kookjs/core";

// import DB from "@kookjs/db";
// import Hook from "@khanakiajs/hook";
import ServerExpressGql from "@kookjs/server-express-gql";

import { ItemResolver } from "./ItemResolver"; // add this


@injectable()
export default class Commerce {
	readonly version: string = "1.0.0";

	constructor() {
		const app = getApp();
		// const db = app.getPlugin(DB);
		const serverExpressGql = app.getPlugin(ServerExpressGql);
		serverExpressGql.addResolver(ItemResolver);
	
	}
}