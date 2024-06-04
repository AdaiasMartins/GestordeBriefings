import fastify, { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateBriefingController } from "./Controller/CreateBriefingController";
import { ListBriefingsController } from "./Controller/ListBriefingsController";
import { DeleteBriefingController } from "./Controller/DeleteBriefingController";
import { UpdateBriefingController } from "./Controller/UpdateBriefingController";
import { GetBriefingController } from "./Controller/GetBriefingController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/briefing", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateBriefingController().handle(request, reply);
    });

    fastify.get("/briefings", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListBriefingsController().handle(request, reply);
    });

    fastify.get("/briefings/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetBriefingController().handle(request, reply);
    });
    fastify.delete("/briefing/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteBriefingController().handle(request, reply);
    });

    fastify.patch("/briefing/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateBriefingController().handle(request, reply);
    });
}
