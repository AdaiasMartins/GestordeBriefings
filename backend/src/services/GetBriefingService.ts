import { error } from "console";
import prismaclient from "../prisma";

class GetBriefingService{
    async execute(id: string){
        if(!id){
            throw new Error("É preciso informar o id do briefing")
        }
        const briefing =  await prismaclient.briefin.findUnique({where: {id}})

        return briefing;
    }
}
export default GetBriefingService;