import { EstadoDoBriefin } from "@prisma/client";

interface CreateBriefingProps {
  nome: string;
  descricao: string;
  estado: EstadoDoBriefin;
}

export default CreateBriefingProps;
  