import prismaclient from "../prisma";
import UpdateBriefinProps from "../Props/UpdateBriefinProps";

class UpdateBriefinService {
  async execute({ id, nome, descricao, estado }: UpdateBriefinProps) {

    if (!id) {
      throw new Error("Briefin não encontrado.");
    }

    const updatedBriefin = await prismaclient.briefin.update({
      where: { id },
      data: { nome, descricao, estado },
    });

    return updatedBriefin;
  }
}

export { UpdateBriefinService }
