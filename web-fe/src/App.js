import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Vote from './components/Voting/Vote';
import Polling from './components/Voting/Polling';
import Executive from './components/Voting/Executive';
import Howto from './components/Voting/Howto';

import { Route,Link } from 'react-router-dom';


function App() {
  const [showVotePage, setShowVotePage] = useState(false);

  return (
    <div>
      <Route exact path="/voting" component={Vote}/>
        <Route exact path="/voting/polling" component={Polling}></Route>
        <Route exact path="/voting/executive" component={Executive}></Route>
        <Route exact path="/voting/howto" component={Howto}></Route>
      <Route exact path="/" component={Main}></Route>
      {/* Vote Page, 아직 메인에 들어갈지 해더에 들어갈지 안정했기 때문에 일단 App에 넣어두었음 */}


    </div>
  );
}

export default App;
