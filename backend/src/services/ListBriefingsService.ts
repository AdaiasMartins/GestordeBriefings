import prismaclient from "../prisma";

class ListBriefingsService{
    async execute(){
        const briefins = await prismaclient.briefin.findMany()
        
        return briefins;
    }
}

export { ListBriefingsService }