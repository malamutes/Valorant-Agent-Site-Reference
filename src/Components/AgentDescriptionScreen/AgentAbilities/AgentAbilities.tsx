import { CSSProperties, useEffect, useRef, useState } from "react";
import { AgentDescription } from "../../../Data/AgentDescriptionData";
import './AgentAbilities.css'

//video is being pushed to the side, need to investigate why


const rightContainer: CSSProperties = {

    display: "grid",
    placeItems: 'center',
}

export interface AgentAbilitiesInfo {
    agent: string,
    agentDict: { [key: string]: AgentDescription }
}

export default function AgentAbilities(props: AgentAbilitiesInfo) {
    const agent = props.agent;
    const agentDict = props.agentDict;


    const abilityOne = agentDict[agent].Abilities[0];
    //default screen load uses ability one

    const [abiltityUrl, changeAbilityUrl] = useState(abilityOne.AbilityUrl);
    const [abilityName, changeAbilityName] = useState(abilityOne.AbilityName);
    const [abilityDesc, changeAbilityDesc] = useState(abilityOne.AbilityDescription);

    const videoRef = useRef<HTMLVideoElement>(null);

    const textPadding = '1.75em';

    useEffect(() => {
        if (videoRef.current != null) {
            videoRef.current.load();
        }
    }, [abiltityUrl]);

    function changeAbility(url: string, name: string, desc: string) {
        changeAbilityUrl(url);
        changeAbilityName(name);
        changeAbilityDesc(desc);
    }

    return (
        <div className="myAgentAbilitiesContainer">
            <div style={{ position: 'absolute', display: 'flex', alignItems: 'center' }} className="row">
                <div className="col">  {/* left side */}

                    <div className="row">
                        <span className="textStyles">SPECIAL ABILITIES</span>
                    </div>

                    <div className="row">

                        {agentDict[agent].Abilities.map((ability, index) => (
                            <div style={{ padding: '1.5em 0', justifyContent: 'center' }} className="row g-0" key={index}>
                                <img style={{ position: 'relative', width: '10%', height: 'auto' }} onClick={() => changeAbility(ability.AbilityUrl, ability.AbilityName, ability.AbilityDescription)}
                                    src={ability.AbilityIcon}
                                />
                            </div>
                        ))}

                    </div>
                </div>

                <div style={rightContainer} className="col">
                    <div className="row videoStyle">
                        <video ref={videoRef} autoPlay loop muted>
                            <source src={abiltityUrl} type="video/mp4"></source>
                        </video>
                    </div>
                    <div style={{ paddingTop: textPadding, fontWeight: '900', fontSize: '1.5em' }} className="row">
                        {abilityName}
                    </div>

                    <div style={{ paddingTop: textPadding, fontWeight: '500', fontSize: '0.8em', wordBreak: 'normal' }} className="row">
                        {abilityDesc}
                    </div>

                </div>
            </div>
        </div >
    )
}



//() => changeText(desc)} the ()=> prevents changeText from being called infinitely, and delays it until onclick
//just hard code abilities for now since the order won't change anyway, itll make
//the data dict more readable w/o key-value pairs nested repeatedly

//video element is a bit different from iamges and text, so look into ref={} and useRef and useEFfect later
//that might work for now but need to go look up what they do in more etai later

/*

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load(); // Reload the video element to pick up the new source
        }
    }, [abiltityUrl]);

    this works because useEffect is of the form useEffect(somefunc, array) where if any value inside
    array changes, someFunc is called again 

    //also get used to map syntax since its a lot more useful than for loop and supports chaining + immutability\
    basically it takes some iterable and applies some function to it 
    map((iterable, index) => {somefunc}) and this returns some array
    logically the same as
    for i in range(iterable.length):
        someotherarray[i] = somfunc(iterable[i])
    return some otherarray

    //function() (stuff here) is lambda

*/
