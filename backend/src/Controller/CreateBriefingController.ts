import { FastifyRequest, FastifyReply } from "fastify";
import { CreateBriefingService } from "../services/CreacteBriefingService";
import { CreateBriefingProps } from "../services/CreacteBriefingService"; 


export class CreateBriefingController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { nome, descricao, estado } = request.body as CreateBriefingProps; 

        const briefinService = new CreateBriefingService();
        const briefin = await briefinService.execute({ nome, descricao, estado });

        reply.send(briefin);    
    }
}
