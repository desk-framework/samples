import { FastifyInstance } from "fastify";
import { Hello } from "../shared/Hello.js";

export default async function routes(fastify: FastifyInstance) {
	// API endpoint: GET hello
	fastify.get("/hello", async (request, reply) => {
		let hello: Hello = { name: "world!" };
		await new Promise((r) => setTimeout(r, 1000));
		return hello;
	});
}
