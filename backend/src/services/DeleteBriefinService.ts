import prismaclient from "../prisma";


interface DeleteBriefinProps{
    id: string
}

class DeleteBriefinService{
    async execute({id}: DeleteBriefinProps){
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
export { DeleteBriefinService }