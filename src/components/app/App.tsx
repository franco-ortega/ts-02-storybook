import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Prologue from '../prologue/Prologue';
import Chapters from '../chapters/Chapters';
import ChapterDetails from '../chapters/ChapterDetails';
import Story from '../story/Story';

// import chapterData from '../../data/chapterData.json';

interface userSelection {
  chapter: string,
  choice: string
}

interface allUserSelections {
  [key: string]: userSelection
}

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [userData, setUserData] = useState<allUserSelections>({});

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
              <Chapters
                userName={userName}
              />
            }
          />
          <Route
            exact path="/chapters/:locale"
            render={() =>
              <ChapterDetails
                userData={userData}
                setUserData={setUserData}
              />
            }
          />
          <Route
            exact path="/story"
            render={() =>
              <Story
                userData={userData}
                setUserData={setUserData}
              />
            }
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
