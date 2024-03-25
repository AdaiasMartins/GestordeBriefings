import { EstadoDoBriefin } from "@prisma/client";
import prismaclient from "../prisma";
import CreateBriefinProps from "../Props/CreateBriefinProps";

class CreateBriefinService{
    async execute({ nome, descricao, estado }: CreateBriefinProps){
        
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


export { CreateBriefinService };
export { CreateBriefinProps }