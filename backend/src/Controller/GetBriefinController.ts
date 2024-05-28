import fastify, { FastifyReply, FastifyRequest } from "fastify";
import GetBriefinService from "../services/GetBriefinService";
import GetBriefinProps from "../Props/GetBriefinProps";

export class GetBriefinController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{id} = request.body as GetBriefinProps;
        const getBriefing = new GetBriefinService();
        const briefin = await getBriefing.execute(id);

        reply.send(briefin);

    }
}