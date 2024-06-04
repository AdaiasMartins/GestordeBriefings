import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { ListBriefingsService } from "../services/ListBriefingsService"
import prismaclient from "../prisma";

export class ListBriefingsController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listBriefinsService = new ListBriefingsService();
        const briefins = await listBriefinsService.execute();

        reply.send(briefins);
    }
}