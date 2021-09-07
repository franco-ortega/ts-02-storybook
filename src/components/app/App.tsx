import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Prologue from '../prologue/Prologue';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('test');
  console.log(userName);

  return (
    <div data-testid="app">
      Hello React TypeScript!
      <Router>
        <Switch>
          <Route
            exact path="/prologue"
            render={() =>
              <Prologue setUserName={setUserName} />
            }
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
