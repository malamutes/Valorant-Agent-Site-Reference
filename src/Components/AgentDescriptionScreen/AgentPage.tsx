import { Form, useLocation } from "react-router-dom";
import { AgentDescriptionDict } from "../../Data/AgentDescriptionData";
import AgentNameDescRole from "./AgentDescription/AgentNameDescRole";
import AgentRoleIconBox from "./AgentDescription/AgentRoleIconBox";
import { RoleIconBoxInfo } from "./AgentDescription/AgentRoleIconBox";
import { NameDescRoleData } from "./AgentDescription/AgentNameDescRole";
import AgentAbilities from "./AgentAbilities/AgentAbilities";

//getting pathname

//need to take in aprameter name so i can decide which to render
//ok wierd issue where page is being rendered twice i think? might need to look
//into it further


function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function AgentPage() {
    const currentLocation = useLocation().pathname;
    const splitString: String[] = currentLocation.split("/");
    //stringsplit[2] is the agent namew
    const currentAgent = capitalize(splitString[2].toLowerCase());
    const dict = AgentDescriptionDict;

    const AgentInfo = dict[`${currentAgent}`]; //gets the dict of relevant agent

    const boxSize = '150px';
    //not dynamic according to this 

    const bigSize = '650px';

    const AgentRoleIconBoxInfo: RoleIconBoxInfo = {
        iconUrl: AgentInfo.Role[1],
        width: boxSize,
        height: boxSize,
        actualRole: AgentInfo.Role[0],
    }

    const agentBox = AgentRoleIconBox(AgentRoleIconBoxInfo);

    const AgentNameDescRoleData: NameDescRoleData = {
        width: bigSize,
        height: bigSize,
        Name: AgentInfo.AgentName.toUpperCase(),
        Desc: AgentInfo.AgentDescription,
        RoleIconBox: agentBox
    }

    const AgentNameDescRoleComponent = AgentNameDescRole(AgentNameDescRoleData);

    return <div>{AgentNameDescRoleComponent}</div>;
}   