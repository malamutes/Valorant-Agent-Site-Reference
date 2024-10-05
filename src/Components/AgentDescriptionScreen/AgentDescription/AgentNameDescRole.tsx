/*const test0: React.CSSProperties = {
    height: '100vh',
    width: '100vh'
}; basically the height will good but best to be able to set it anyway, for the text inside i can proably
hard code the styles like below first*/

import { RoleIconBoxInfo } from "./AgentRoleIconBox";
import AgentRoleIconBox from "./AgentRoleIconBox";

const name: React.CSSProperties = {
    //backgroundColor: 'red',
    fontWeight: '900',
    fontSize: '4rem',
    fontStyle: 'italic',
    padding: 0,
    paddingBottom: '10px',
    paddingTop: '25%' //shifting it down, padding is inside, margin is top, so theres basically hollow sapce above 
    //name right now
};

const desc: React.CSSProperties = {
    //backgroundColor: 'green',
    fontWeight: '500',
    fontSize: '1.05rem',
    textAlign: 'start',
    paddingBottom: '35px',
    width: '40%',
    wordBreak: 'normal'

};


export interface NameDescRoleData {
    Name: string,
    Desc: string,
    RoleIconBox: React.ReactNode
}


export default function AgentNameDescRole(props: NameDescRoleData) {
    return (
        <div className="myDescContainer">
            <div style={{ fontStyle: 'italic' }} className="row textStyles">
                {props.Name}
            </div>

            <div style={desc} className="row">
                {props.Desc}
            </div>

            <div className="row">
                {props.RoleIconBox}
            </div>
        </div>
    )
}