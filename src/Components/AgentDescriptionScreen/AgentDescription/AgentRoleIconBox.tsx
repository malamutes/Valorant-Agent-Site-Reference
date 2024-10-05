import React from "react";
import './AgentRoleIconBox.css'

const imgRoleStyle: React.CSSProperties = {
    filter: 'invert(1) sepia(1) saturate(50) hue-rotate(0deg)',
    position: 'absolute',
    width: '30%',
    height: 'auto',

    top: '35%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Adjust positioning to center
    //making it red
}


export interface RoleIconBoxInfo {
    iconUrl: string,
    actualRole: string
}


export default function AgentRoleIconBox(props: RoleIconBoxInfo) {
    return (
        <div className="myAgentRoleIconBox">
            <div className="graySquare">
                <img src={props.iconUrl} alt="Controller" style={imgRoleStyle} />
                <span className="textStyleRoleIcon">ROLE</span>
                <span className="textStyleRoleIcon">{props.actualRole.toUpperCase()}</span>
            </div>
        </div>
    )
}



