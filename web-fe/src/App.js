import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Vote from './components/Voting/Vote';
import { Route,Link } from 'react-router-dom';


function App() {
  const [showVotePage, setShowVotePage] = useState(false);

  return (
    <div>
      <Route path="/voting" component={Vote}/>
      <Route exact path="/" component={Main}></Route>
      {/* Vote Page, 아직 메인에 들어갈지 해더에 들어갈지 안정했기 때문에 일단 App에 넣어두었음 */}
      <Link to="/voting">Vote page</Link>


    </div>
  );
}

export default App;
