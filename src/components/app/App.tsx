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

// type ChapterInfo = {
//   title: string,
//   choices: string[]
// }

// type AllChapterInfo = ChapterInfo[]

// interface ChapterInfo {
//   info: [
//     choice: string,
//     completed: boolean
//   ]
// }

type ChapterInfo = [
    string,
    boolean
]


const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [userData, setUserData] = useState<ChapterInfo[]>([]);

  // const locations: AllChapterInfo = Object.values(chapterData);

  // const [completed, setCompleted] = useState<{[key: string]: boolean}>({});

  // locations.forEach(location => {
  //   const key = location.title;
  //   console.log('KEY: ' + key);
  //   completed[key] = false;
  // });




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
                // completed={completed}
              />
            }
          />
          <Route
            exact path="/chapters/:locale"
            render={() =>
              <ChapterDetails
                userData={userData}
                setUserData={setUserData}
                // setCompleted={setCompleted}
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
