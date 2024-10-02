import React from "react";

const redOutline: React.CSSProperties = {
    position: 'absolute',
    border: '1.75px solid red',
    fontWeight: '200',
    display: 'grid',
    placeItems: 'center',
};

const graySquare: React.CSSProperties = {
    position: 'absolute',
    height: '80%',
    width: '80%',
    backgroundColor: 'rgb(50, 50, 50)',
    display: 'flex',
}

const imgRoleStyle: React.CSSProperties = {
    filter: 'invert(1) sepia(1) saturate(50) hue-rotate(0deg)',
    position: 'absolute',
    width: '55%',
    height: 'auto',

    top: '35%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Adjust positioning to center
    //making it red
}


export interface RoleIconBoxInfo {
    iconUrl: string,
    height: string,
    width: string,
    actualRole: string
}


export default function AgentRoleIconBox(props: RoleIconBoxInfo) {
    const combineRedOutlineStyle: React.CSSProperties = {
        ...redOutline, //spread oeprator
        height: props.height,
        width: props.width
    }

    return (
        <div style={combineRedOutlineStyle}>
            <div style={graySquare}>
                <div className="container">
                    <div className="row">
                        <img src={props.iconUrl} alt="Controller" style={imgRoleStyle} />
                        <span style={{ position: 'absolute', top: '57.5%', fontSize: '70%' }}>ROLE</span>
                        <span style={{ position: 'absolute', top: '72.5%', fontSize: '70%', color: 'red', }}>{props.actualRole.toUpperCase()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}