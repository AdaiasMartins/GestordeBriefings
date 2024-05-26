import { FastifyRequest, FastifyReply } from "fastify";
import { CreateBriefinController } from "../../src/Controller/CreateBriefinController";
import { CreateBriefinService } from "../../src/services/CreacteBriefinService";

jest.mock("../../src/services/CreateBriefinService");

describe('CreateBriefinController', () => {
    let createBriefinController: CreateBriefinController;
    let request: FastifyRequest;
    let reply: FastifyReply;

    beforeEach(() => {
        createBriefinController = new CreateBriefinController();
        request = {
            body: {
                nome: 'Test Briefing',
                descricao: 'Test Description',
                estado: 'ativo'
            }
        } as FastifyRequest;

        reply = {
            send: jest.fn()
        } as unknown as FastifyReply;
    });

    it('should create a briefing and send the response', async () => {
        const mockBriefin = { id: 1, nome: 'Test Briefing', descricao: 'Test Description', estado: 'ativo' };
        (CreateBriefinService.prototype.execute as jest.Mock).mockResolvedValue(mockBriefin);

        await createBriefinController.handle(request, reply);

        expect(CreateBriefinService.prototype.execute).toHaveBeenCalledWith({
            nome: 'Test Briefing',
            descricao: 'Test Description',
            estado: 'ativo'
        });
        expect(reply.send).toHaveBeenCalledWith(mockBriefin);
    });
});
