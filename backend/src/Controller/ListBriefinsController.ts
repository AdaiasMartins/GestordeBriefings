import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { ListBriefinsService } from "../services/ListBriefinsService"
import prismaclient from "../prisma";

export class ListBriefinsController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listBriefinsService = new ListBriefinsService();
        const briefins = await listBriefinsService.execute();

        reply.send(briefins);
    }
}