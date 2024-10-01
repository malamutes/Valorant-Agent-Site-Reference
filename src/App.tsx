import React from 'react';
import './App.css';
import AgentCard from './Components/AgentListScreen/AgentCard';
import AgentGrid from './Components/AgentListScreen/AgentGrid';
import { AgentInfoList } from './Data/AgentCardData';
import { AgentCardList } from './Components/AgentListScreen/AgentGrid';
import makeAgentCardList from './Components/AgentListScreen/MakeAgentCardList';


//max width is set in app.css but ened to fix padding around later
//the outside pading is 242.5 in total around so half that fort each side
//need to fix f12 layout distortion

export default function App() {
  const width = 305; //conntrol the width here, need to find a quarter of grid size
  const AgentDisplayData = [`${width}px`, `${width * 822 / 616}px`, `${width * 822 / 616}px`, '10%', 'gray'];
  //aspect ratio is 0.75
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

