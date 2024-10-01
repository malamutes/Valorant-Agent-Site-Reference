import AgentCard from "./AgentCard";
import { AgentInfo } from "../../Data/AgentCardData";

function makeAgentCardList(agentDisplayData: any[], agentInfoList: AgentInfo[]) {
    //for dispaly data always ==> width, imgcardheight, namecardheight, namecardcolor 
    const AgentList: JSX.Element[] = [];
    const displayData = agentDisplayData;
    const length = agentInfoList.length;
    for (let i = 0; i < length; i++) {
        var agent = agentInfoList[i];
        //i cant just call the fnction i need to use </> to indicate its a react component 
        //kinda like @composable prefix in compose
        const agentCard = <AgentCard
            key={agent.name}
            width={displayData[0]}
            height={displayData[1]}
            imgCardHeight={displayData[2]}
            nameCardHeight={displayData[3]}
            imageSrc={agent.src}
            imgAlt={agent.alt}
            nameCardColor={displayData[4]}
            nameCardName={agent.name.toUpperCase()}
        />
        AgentList.push(agentCard);
    }
    return AgentList;
}

export default makeAgentCardList;