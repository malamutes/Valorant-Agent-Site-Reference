/*const test0: React.CSSProperties = {
    height: '100vh',
    width: '100vh'
}; basically the height will good but best to be able to set it anyway, for the text inside i can proably
hard code the styles like below first*/


const desc: React.CSSProperties = {
    //backgroundColor: 'green',
    position: 'relative',
    fontWeight: '500',
    fontSize: '1.05rem',
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

    const leftSpace = '5%'
    const topSpace = '25%'

    return (
        <div className="myAgentNameDescRole">
            <div style={{ position: 'relative', left: leftSpace, top: topSpace }}>
                <div style={{ fontStyle: 'italic', fontSize: '4.5em' }}>
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



