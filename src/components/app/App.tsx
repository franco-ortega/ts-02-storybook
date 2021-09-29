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
import { userSelections } from '../../utils/types';

// TO DO LIST:
// "Submit" button should not be clickable until a selection has been made
//// -this goes for Prologue page and ChapterDetails page

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [completed, setCompleted] = useState<completedChapters>({});
  const [userSelections, setUserSelections] = useState<userSelections>([]);

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
                completed={completed}
              />
            }
          />
          <Route
            exact path="/chapters/:chapter"
            render={() =>
              <ChapterDetails
                setCompleted={setCompleted}
                userSelections={userSelections}
                setUserSelections={setUserSelections}
              />
            }
          />
          <Route
            exact path="/story"
            render={() =>
              <Story
                completed={completed}
                setCompleted={setCompleted}
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
