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
import { allUserSelections } from '../../utils/interfaces';
import { userSelections } from '../../utils/types';

// TO DO LIST:
// Add "Go Back" button to ChapterDetails

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [userData, setUserData] = useState<allUserSelections>({});
  const [userSelections, setUserSelections] = useState<userSelections>([]);

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
                userSelections={userSelections}
                setUserSelections={setUserSelections}
              />
            }
          />
          <Route
            exact path="/story"
            render={() =>
              <Story
                userData={userData}
                setUserData={setUserData}
                userSelections={userSelections}
                setUserSelections={setUserSelections}
              />
            }
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
