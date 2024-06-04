import { EstadoDoBriefin } from "@prisma/client";

interface UpdateBriefingProps {
  id: string; 
  nome?: string;
  descricao?: string; 
  estado?: EstadoDoBriefin; 
}

export default UpdateBriefingProps;
