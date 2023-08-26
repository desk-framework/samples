// Import the framework and instantiate it
import Fastify from "fastify";
const fastify = Fastify({ logger: true });

// Use Hello API endpoint
import hello from "./server/hello.js";
fastify.register(hello, { prefix: "/api" });

// Use static files at root
import staticRoot from "./server/static_root.js";
fastify.register(staticRoot);

// Run the server
const port = +(process.env.PORT || 3000);
try {
  await fastify.listen({ port });
  fastify.log.info("Starting server --- " + new Date());
  fastify.log.info("Listening on port " + port);
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
