import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Prologue from '../prologue/Prologue';
import Chapters from '../chapters/Chapters';
import ChapterDetails from '../chapters/ChapterDetails';
import { useCompleted } from '../../hooks/useCompleted';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [userData, setUserData] = useState<string[]>([]);
  const { completed, completeChapter } = useCompleted();
  console.log(userData);
  console.log(completed);

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
            render={() =>
              <ChapterDetails
                setUserData={setUserData}
                completeChapter={completeChapter}
              />
            }
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
