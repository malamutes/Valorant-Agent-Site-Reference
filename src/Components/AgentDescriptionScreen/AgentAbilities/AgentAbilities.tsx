import { CSSProperties, useEffect, useRef, useState } from "react";
import { AgentDescription } from "../../../Data/AgentDescriptionData";


//do layout next and then generalise before combining with desc component

const textstyle: CSSProperties = {
    fontSize: '4rem',
    fontWeight: '900',
}

const rightContainer: CSSProperties = {
    height: '50%',
    width: '100%',
    display: "grid",
    placeItems: 'center'
}

export interface AgentAbilitiesInfo {
    width: string,
    height: string,
    agent: string,
    agentDict: { [key: string]: AgentDescription } //enforcing it to be specific type of object of string key as value
    // and agent desc as value
}

export default function AgentAbilities(props: AgentAbilitiesInfo) {
    const agent = props.agent;
    const agentDict = props.agentDict;


    const abilityOne = agentDict[agent].Abilities[0];
    //need to check for error anyway
    //default screen load uses ability one

    const [abiltityUrl, changeAbilityUrl] = useState(abilityOne.AbilityUrl);
    const [abilityName, changeAbilityName] = useState(abilityOne.AbilityName);
    const [abilityDesc, changeAbilityDesc] = useState(abilityOne.AbilityDescription);

    const videoRef = useRef<HTMLVideoElement>(null);

    const textPadding = '25px';

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
        <div style={{ position: 'relative', height: props.height, width: props.width }} className="myContainer">
            <div style={{ position: 'absolute', display: 'flex', alignItems: 'center' }} className="row">
                <div className="col">  {/* left side */}

                    <div className="row">
                        <span style={textstyle}>SPECIAL ABILITIES</span>
                    </div>

                    <div className="row">

                        {agentDict[agent].Abilities.map((ability, index) => (
                            <div style={{ padding: '20px' }} className="col-12" key={index}>
                                <img onClick={() => changeAbility(ability.AbilityUrl, ability.AbilityName, ability.AbilityDescription)}
                                    src={ability.AbilityIcon}
                                />
                            </div>
                        ))}

                    </div>
                </div>

                <div style={rightContainer} className="col">
                    <div className="row">
                        <video ref={videoRef} autoPlay loop muted>
                            <source src={abiltityUrl} type="video/mp4"></source>
                        </video>
                    </div>
                    <div style={{ paddingTop: textPadding, fontWeight: '900', fontSize: '1.75rem' }} className="row">
                        {abilityName}
                    </div>

                    <div style={{ paddingTop: textPadding, fontWeight: '500', fontSize: '1rem' }} className="row">
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

    //function() (stuff here) is implicit return apparently

*/
