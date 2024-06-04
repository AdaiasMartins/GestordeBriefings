import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteBriefingService } from "../services/DeleteBriefingService";

export class DeleteBriefingController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string };

        const deleteBriefinService = new DeleteBriefingService();
        const briefin = await deleteBriefinService.execute({ id });

        reply.send(briefin);
    }
}
