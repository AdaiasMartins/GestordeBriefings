import { EstadoDoBriefin } from "@prisma/client";

interface UpdateBriefinProps {
  id: string; 
  nome?: string;
  descricao?: string; 
  estado?: EstadoDoBriefin; 
}

export default UpdateBriefinProps;
