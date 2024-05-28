import Fastify from "fastify";
import cors from "@fastify/cors";
import 'dotenv/config';
import { routes } from "./route";
import { error } from "console";
import { request } from "http";

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) =>{
    reply.code(400).send({message: error.message})
})

export {app};

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await app.register(cors);
        await app.register(routes);
        await app.listen({ port: 3000});
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log('DATABASE_URL:', process.env.DATABASE_URL);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

start();

