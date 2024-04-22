import fastify, { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateBriefinController } from "./Controller/CreateBriefinController";
import { ListBriefinsController } from "./Controller/ListBriefinsController";
import { DeleteBriefinController } from "./Controller/DeleteBriefinController";
import { UpdateBriefinController } from "./Controller/UpdateBriefinController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/briefin", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateBriefinController().handle(request, reply);
    });

    fastify.get("/briefins", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListBriefinsController().handle(request, reply);
    });

    fastify.delete("/briefin/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteBriefinController().handle(request, reply);
    });

    fastify.patch("/briefin/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateBriefinController().handle(request, reply);
    });
}
