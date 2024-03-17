// CreateBriefinProps.ts
import { EstadoDoBriefin } from "@prisma/client";

interface CreateBriefinProps {
  nome: string;
  descricao: string;
  estado: EstadoDoBriefin;
}

export default CreateBriefinProps;
