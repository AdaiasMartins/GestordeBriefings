import { CreateBriefinService } from '../../src/services/CreacteBriefingService';
import { PrismaClient, EstadoDoBriefin } from '@prisma/client';

jest.mock('../prisma', () => ({
  briefin: {
    create: jest.fn()
  }
}));

describe('CreateBriefinService', async () => {
    const service = new CreateBriefinService();
    const createMock = (PrismaClient as any).briefin.create as jest.Mock;

    createMock.mockResolvedValue({
      id: '1',
      nome: 'Test Briefin',
      descricao: 'Descrição do Test Briefin',
      estado: EstadoDoBriefin.aprovado,
    });

    const briefin = await service.execute({
      nome: 'Test Briefin',
      descricao: 'Descrição do Test Briefin',
      estado: EstadoDoBriefin.aprovado
    });

    expect(briefin).toEqual({
      id: '1',
      nome: 'Test Briefin',
      descricao: 'Descrição do Test Briefin',
      estado: EstadoDoBriefin.aprovado,
    });
    expect(createMock).toHaveBeenCalledWith({
      data: {
        nome: 'Test Briefin',
        descricao: 'Descrição do Test Briefin',
        estado: EstadoDoBriefin.aprovado,
      }
    });
  });

  it('should throw error if any field is missing', async () => {
    const service = new CreateBriefinService();
    
    await expect(service.execute({
      nome: '',
      descricao: 'Descrição do Test Briefin',
      estado: EstadoDoBriefin.finalizado
    })).rejects.toThrow('Todos os campos devem ser preenchidos.');
  });
