// // import "reflect-metadata"
// import 'module-alias/register';

import { createApp, env } from "@kookjs/core";

const app = createApp({
	root: __dirname,
});

const plugins = [
	"@kookjs/db",
	"@kookjs/server",
	"@kookjs/server-express",
	"@kookjs/server-express-gql",
	"@kookjs/option",
	"@kookjs/auth",
	"@kookjs/cache",
	"@kookjs/mail",
	"@kookjs/auth-acl",
	"@jeoga/commerce"
];

const main = async () => {
	app.registerPlugins(plugins);
	await app.boot();
	console.log("App booted.");
};

main();

// import C from "@jeoga/commerce"
// new C()