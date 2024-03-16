import fastify, {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CreateBriefinController } from "./Controller/CreateBriefinController";
import { ListBriefinsController } from "./Controller/ListBriefinsController";
import { DeleteBriefinController } from "./Controller/DeleteBriefinController";
import { UpdateBriefinController } from "./Controller/UpdateBriefinController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    

    fastify.post("/briefin", async (resquest: FastifyRequest, reply: FastifyReply) =>{
        return new CreateBriefinController().handle(resquest, reply);
    })

    fastify.get("/briefins", async (resquest: FastifyRequest, reply: FastifyReply) =>{
        return new ListBriefinsController().handle(resquest, reply);
    })

    fastify.delete("/briefin/:id", async (request, reply) => {
        return new DeleteBriefinController().handle(request, reply);
    });

    fastify.patch("/briefin/:id", async (request, reply) => {
        return new UpdateBriefinController().handle(request, reply);
  });



    


    

    
}