import fastify, { FastifyReply, FastifyRequest } from "fastify";
import GetBriefinService from "../services/GetBriefingService";
import GetBriefinProps from "../Props/GetBriefingProps";

export class GetBriefingController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{id} = request.params as GetBriefinProps;
        const getBriefing = new GetBriefinService();
        const briefin = await getBriefing.execute(id);

        reply.send(briefin);

    }
}   