import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AgentCard from './AgentCard';
import './AgentGrid.css'

export interface AgentCardList {
    agentList: React.ReactNode[]; //will be arr of agentcard objects 
    //react.reactnode is also more general than JSX.element
    columns: number,
}

export default function AgentGrid(props: AgentCardList) {
    const agentCardList = props.agentList;
    const colClass = `col-lg-3 col-6`; //adjusting how many columns based on viewport size

    //cols is 3

    return (
        <div className='myContainer' id="hehexd">
            <div className='row'>
                {agentCardList.map((agentcard, index) =>
                    (<div className={colClass} key={index}> {agentcard} </div>))}
            </div>
        </div>
    );
}

//bootstrap (css lib) automatically wraps to a new row in its grid layout once column
//limit which is specified is reached

