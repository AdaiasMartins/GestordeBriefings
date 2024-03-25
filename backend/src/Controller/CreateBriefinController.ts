import { FastifyRequest, FastifyReply } from "fastify";
import { CreateBriefinService } from "../services/CreacteBriefinService";
import { CreateBriefinProps } from "../services/CreacteBriefinService"; 


export class CreateBriefinController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { nome, descricao, estado } = request.body as CreateBriefinProps; 

        const briefinService = new CreateBriefinService();
        const briefin = await briefinService.execute({ nome, descricao, estado });

        reply.send(briefin);    
    }
}
