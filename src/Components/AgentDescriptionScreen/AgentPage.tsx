import { Form, useLocation } from "react-router-dom";
import { AgentDescriptionDict } from "../../Data/AgentDescriptionData";
import AgentNameDescRole from "./AgentDescription/AgentNameDescRole";
import AgentRoleIconBox from "./AgentDescription/AgentRoleIconBox";
import { RoleIconBoxInfo } from "./AgentDescription/AgentRoleIconBox";
import { NameDescRoleData } from "./AgentDescription/AgentNameDescRole";
import AgentAbilities, { AgentAbilitiesInfo } from "./AgentAbilities/AgentAbilities";
import { AgentImageLinks } from "../../Data/AgentImageLinkData";

//getting pathname

//need to take in aprameter name so i can decide which to render
//ok wierd issue where page is being rendered twice i think? might need to look
//into it further


function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function AgentPage() {
    const CurrentAgentImageLinks = AgentImageLinks;

    const currentLocation: string = useLocation().pathname;
    const splitString: String[] = currentLocation.split("/");
    //stringsplit[2] is the agent namew

    const currentAgent = capitalize(splitString[2].toLowerCase());
    const dict = AgentDescriptionDict;

    const AgentImage = CurrentAgentImageLinks[`${currentAgent}`];
    //potential undefined issue here, need to define type in the actual data type itself

    const AgentInfo = dict[`${currentAgent}`]; //gets the dict of relevant agent


    const AgentRoleIconBoxInfo: RoleIconBoxInfo = {
        iconUrl: AgentInfo.Role[1],
        actualRole: AgentInfo.Role[0],
    }

    const agentBox = AgentRoleIconBox(AgentRoleIconBoxInfo);

    const AgentNameDescRoleData: NameDescRoleData = {
        Name: AgentInfo.AgentName.toUpperCase(),
        Desc: AgentInfo.AgentDescription,
        RoleIconBox: agentBox
    }

    const AgentNameDescRoleComponent = AgentNameDescRole(AgentNameDescRoleData);

    const CurrentAgentAbilitiesInfo: AgentAbilitiesInfo = {
        agent: currentAgent,
        agentDict: dict,
    }

    const CurrentABilities = AgentAbilities(CurrentAgentAbilitiesInfo)

    return <div style={{
        position: 'relative',
        backgroundColor: 'transparent', width: '70%', left: '15%',
    }}>
        {AgentNameDescRoleComponent}
    </div>
}   