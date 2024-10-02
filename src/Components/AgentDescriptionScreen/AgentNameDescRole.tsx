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
    paddingBottom: '10px'
};

const desc: React.CSSProperties = {
    //backgroundColor: 'green',
    fontWeight: '500',
    fontSize: '1.275rem',
    textAlign: 'start',
    paddingBottom: '35px',
};


export interface NameDescRoleData {
    width: string,
    height: string
    Name: string,
    Desc: string,
    RoleIconBox: React.ReactNode
}


export default function AgentNameDescRole(props: NameDescRoleData) {
    const containerStyle: React.CSSProperties = {
        height: props.height,
        width: props.width,
    };

    return (
        <div style={containerStyle} className="container">
            <div style={name} className="row">
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