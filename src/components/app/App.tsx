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
import { completedChapters } from '../../utils/interfaces';
import { Selections } from '../../utils/types';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [completed, setCompleted] = useState<completedChapters>({});
  const [userSelections, setUserSelections] = useState<Selections>([]);

  return (
    <div data-testid="app">
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
                userSelections={userSelections}
                completed={completed}
              />
            }
          />
          <Route
            exact path="/chapters/:chapter"
            render={() =>
              <ChapterDetails
                setCompleted={setCompleted}
                // userSelections={userSelections}
                setUserSelections={setUserSelections}
              />
            }
          />
          <Route
            exact path="/story"
            render={() =>
              <Story
                setUserName={setUserName}
                userSelections={userSelections}
                setUserSelections={setUserSelections}
                setCompleted={setCompleted}
              />
            }
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
