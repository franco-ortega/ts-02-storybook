import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Chapters from '../chapters/Chapters';
import Prologue from '../prologue/Prologue';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('test');

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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
