import { EstadoDoBriefin } from "@prisma/client";
import prismaclient from "../prisma";
import CreateBriefingProps from "../Props/CreateBriefingProps";

class CreateBriefingService{
    async execute({ nome, descricao, estado }: CreateBriefingProps){
        
        if(!nome || !descricao || !estado){
            throw new Error("Todos os campos devem ser preenchidos.");
        }

        const briefin = await prismaclient.briefin.create({
            data:{
                nome,
                descricao,
                estado
            }
        })
        return briefin
    }
}


export { CreateBriefingService };
export { CreateBriefingProps }