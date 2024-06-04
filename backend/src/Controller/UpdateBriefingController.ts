import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateBriefingService } from "../services/UpdateBriefingService";
import { EstadoDoBriefin } from "@prisma/client";

export class UpdateBriefingController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const { nome, descricao, estado } = request.body as {nome: string, descricao: string, estado: EstadoDoBriefin};

    const updateBriefinService = new UpdateBriefingService();
    try {
      const updatedBriefin = await updateBriefinService.execute({
        id,
        nome,
        descricao,
        estado,
      });

      reply.send(updatedBriefin);
    } catch (error) {
      if (error instanceof Error) {
        return reply.status(404).send({ message: error.message });
      }

      return reply.status(500).send({ message: "Erro interno do servidor" });
    }
  }
}
