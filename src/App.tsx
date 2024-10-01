import React from 'react';
import './App.css';
import AgentCard from './Components/AgentListScreen/AgentCard';
import AgentGrid from './Components/AgentListScreen/AgentGrid';
import { AgentInfoList } from './Data/AgentCardData';
import { AgentCardList } from './Components/AgentListScreen/AgentGrid';
import makeAgentCardList from './Components/AgentListScreen/MakeAgentCardList';

export default function App() {
  const AgentDisplayData = ['250px', '500px', 'auto', '5%', 'gray'];
  //for dispaly data always ==> width, height, imgcardheight, namecardheight, namecardcolor 
  const infoList = AgentInfoList;
  const cardList: AgentCardList = {
    agentList: makeAgentCardList(AgentDisplayData, infoList),
    columns: 4,
  };

  return (
    <>
      <div >
        {AgentGrid(cardList)}
      </div>
    </>

  );
}

