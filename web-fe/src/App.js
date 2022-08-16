import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Vote from './components/Voting/Vote';

function App() {
  const [showVotePage, setShowVotePage] = useState(false);

  return (
    <div>
      <Main />

      {/* Vote Page, 아직 메인에 들어갈지 해더에 들어갈지 안정했기 때문에 일단 App에 넣어두었음 */}
      {showVotePage ? <Vote /> : <button onClick={ () => { setShowVotePage(true) } }>Vote</button>}
    </div>
  );
}

export default App;
