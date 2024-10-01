import { Form, useLocation } from "react-router-dom";
import { AgentDescriptionDict } from "../../Data/AgentDescriptionData";

//getting pathname

//need to take in aprameter name so i can decide which to render
//ok wierd issue where page is being rendered twice i think? might need to look
//into it further


function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function AgentDescription() {
    const currentLocation = useLocation().pathname;
    const splitString: String[] = currentLocation.split("/");
    //stringsplit[2] is the agent namew
    const currentAgent = capitalize(splitString[2].toLowerCase());
    const dict = AgentDescriptionDict;

    const AgentInfo = dict[`${currentAgent}`]; //gets the dict of relevant agent
    return <h1>{currentAgent}</h1>;
}   