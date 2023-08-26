import * as path from "path";
import { FastifyInstance } from "fastify";
import staticRoot from "@fastify/static";

export default async function routes(fastify: FastifyInstance) {
  fastify.register(staticRoot, { root: path.resolve("dist") });
  fastify.log.info("Hosting root " + path.resolve("dist"));
}
