import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ChapterDetails from '../chapters/ChapterDetails';
import Chapters from '../chapters/Chapters';
import Prologue from '../prologue/Prologue';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

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
            component={ChapterDetails}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
