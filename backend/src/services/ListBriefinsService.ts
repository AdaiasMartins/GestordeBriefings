import prismaclient from "../prisma";

class ListBriefinsService{
    async execute(){
        const briefins = await prismaclient.briefin.findMany()
        
        return briefins;
    }
}

export { ListBriefinsService }