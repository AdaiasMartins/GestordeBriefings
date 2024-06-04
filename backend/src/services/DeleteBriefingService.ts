import DeleteBriefingProps from "../Props/DeleteBriefingProps";
import prismaclient from "../prisma";


class DeleteBriefingService{
    async execute({id}: DeleteBriefingProps){
        if(!id){
            throw new Error("Id inválido");
        }

        const findBriefin = await prismaclient.briefin.findFirst({
            where:{
                id: id
            }
        })

        if(!findBriefin){
            throw new Error("Briefin nao encontrado")
        }

        await prismaclient.briefin.delete({
            where:{
                id: findBriefin.id
            }
        })
        return{message: "Briefin deletado"}
    }
}
export { DeleteBriefingService }