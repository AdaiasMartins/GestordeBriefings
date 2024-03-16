import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteBriefinService } from "../services/DeleteBriefinService";

export class DeleteBriefinController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string };

        const deleteBriefinService = new DeleteBriefinService();
        const briefin = await deleteBriefinService.execute({ id });

        reply.send(briefin);
    }
}
