import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./route";
import { error } from "console";
import { request } from "http";

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) =>{
    reply.code(400).send({message: error.message})
})

const start = async () => {
    try {
        await app.register(cors);
        await app.register(routes);
        await app.listen({ port: 3000});
        console.log(`Server listening on http://localhost:3000`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

start();

