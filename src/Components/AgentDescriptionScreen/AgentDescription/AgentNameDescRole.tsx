import './AgentNameDescRole.css'

const desc: React.CSSProperties = {
    //backgroundColor: 'green',
    position: 'relative',
    fontWeight: '500',
    fontSize: '1rem',
    textAlign: 'start',
    paddingBottom: '35px',
    width: '32.5%',
    wordBreak: 'normal',
};


export interface NameDescRoleData {
    Name: string,
    Desc: string,
    RoleIconBox: React.ReactNode
}


export default function AgentNameDescRole(props: NameDescRoleData) {

    return (
        <div className="myAgentNameDescRole">
            <div className="nameDescContainer">
                <div className="AgentName">
                    {props.Name}
                </div>

                <div style={desc}>
                    {props.Desc}

                </div>
                {props.RoleIconBox}

            </div>

        </div>
    )
}



