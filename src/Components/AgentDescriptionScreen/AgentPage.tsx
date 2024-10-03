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

    const boxSize = '150px';
    //not dynamic according to this 

    const bigSizeW = '650px';
    const bigSizeH = '800px';

    const AgentRoleIconBoxInfo: RoleIconBoxInfo = {
        iconUrl: AgentInfo.Role[1],
        width: boxSize,
        height: boxSize,
        actualRole: AgentInfo.Role[0],
    }

    const agentBox = AgentRoleIconBox(AgentRoleIconBoxInfo);

    const AgentNameDescRoleData: NameDescRoleData = {
        width: bigSizeW,
        height: bigSizeH,
        Name: AgentInfo.AgentName.toUpperCase(),
        Desc: AgentInfo.AgentDescription,
        RoleIconBox: agentBox
    }

    const AgentNameDescRoleComponent = AgentNameDescRole(AgentNameDescRoleData);

    const CurrentAgentAbilitiesInfo: AgentAbilitiesInfo = {
        height: "600px",
        width: "1500px",
        agent: currentAgent,
        agentDict: dict,
    }

    const CurrentABilities = AgentAbilities(CurrentAgentAbilitiesInfo)

    return (
        <div>
            <div style={{ display: 'grid', justifyItems: 'center' }} className="row">
                {/* i dont understand how justify items doesnt affect all other children inside */}
                <div style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)', position: 'absolute', backgroundColor: "black", width: '100%', height: bigSizeH, zIndex: 0 }} ></div>
                <img style={{ position: 'absolute', height: bigSizeH, width: 'auto', left: '40%' }} src={AgentImage} alt="Image" />
                <div style={{ zIndex: 1 }} >{AgentNameDescRoleComponent}</div>
            </div>

            <div style={{ display: "grid", placeItems: 'center', paddingTop: '50px' }} className="row">
                {/* its because parent of currentabilties doesnt have enforced pixels so its pushuing
                it out of bounds hence why its not affected  */}
                <img style={{ position: 'absolute', height: '50%', width: 'auto', filter: 'opacity(5%)' }} src={dict[currentAgent].Role[1]} alt="RoleIcon" />
                <div>{CurrentABilities}</div>
            </div>
        </div>
    );
}   