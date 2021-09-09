import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Prologue from '../prologue/Prologue';
import Chapters from '../chapters/Chapters';
import ChapterDetails from '../chapters/ChapterDetails';

// interface User {
//   choices: string[]
// }

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [userData, setUserData] = useState<string[]>([]);
  console.log(userData);

  return (
    <div data-testid="app">
      Hello React TypeScript!
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={() =>
              <Prologue setUserName={setUserName} />
            }
          />
          <Route
            exact path="/chapters"
            render={() =>
              <Chapters userName={userName} />
            }
          />
          <Route
            exact path="/chapters/:locale"
            // component={ChapterDetails}
            render={() =>
              <ChapterDetails setUserData={setUserData} />
            }
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
