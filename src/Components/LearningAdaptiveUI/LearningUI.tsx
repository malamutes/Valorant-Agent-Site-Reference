export default function LearningUI() {
    const width = '500px';
    return (
        <>
            <div style={{ position: 'relative', backgroundColor: 'aqua', width: width, height: width }}></div>
            <div style={{ position: 'relative', backgroundColor: 'green', width: width, height: width }}></div>
        </>)


}

//stuff here from agent page
return (
    <div>
        <div style={{ display: 'grid', justifyItems: 'center' }} className="row">
            <div style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)', position: 'absolute', backgroundColor: "black", width: '100%', height: bigSizeH, zIndex: 0 }} ></div>
            <img style={{ position: 'absolute', height: bigSizeH, width: 'auto', left: '40%' }} src={AgentImage} alt="Image" />
            <div style={{ zIndex: 1 }} >{AgentNameDescRoleComponent}</div>
        </div>

        <div style={{ display: "grid", placeItems: 'center', paddingTop: '50px' }} className="row">
            <img style={{ position: 'absolute', height: '50%', width: 'auto', filter: 'opacity(5%)' }} src={dict[currentAgent].Role[1]} alt="RoleIcon" />
            <div>{CurrentABilities}</div>
        </div>
    </div>
);


