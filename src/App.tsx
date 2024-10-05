import React from 'react';
import './App.css';
import AgentCard from './Components/AgentListScreen/AgentCard';
import AgentGrid from './Components/AgentListScreen/AgentGrid';
import { AgentInfoList } from './Data/AgentCardData';
import { AgentCardList } from './Components/AgentListScreen/AgentGrid';
import makeAgentCardList from './Components/AgentListScreen/MakeAgentCardList';

import { AgentCardParams } from './Components/AgentListScreen/AgentCard';

import LearningUI from './Components/LearningAdaptiveUI/LearningUI';

//max width is set in app.css but ened to fix padding around later
//the outside pading is 242.5 in total around so half that fort each side
//need to fix f12 layout distortion

export default function App() {
  const infoList = AgentInfoList;
  const cardList: AgentCardList = {
    agentList: makeAgentCardList(infoList),
    columns: 4,
  };

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  console.log(`Viewport width: ${viewportWidth}px, height: ${viewportHeight}px`);

  /*const fuckthis: AgentCardParams = {
    imageSrc: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png?auto=format&fit=fill&q=80&w=616",
    imgAlt: "brimstone",
    nameCardName: "BRIMSTONE"
  }*/

  return (<>
    <div >
      {AgentGrid(cardList)}
    </div>
  </>);
}



/*


*/

/* 
<div className='myAppContainer'>
    {AgentCard(fuckthis)}
  </div>*/