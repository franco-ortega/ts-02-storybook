import React from 'react';
import PropTypes from 'prop-types';
import styles from './Story.module.css';
import { useHistory } from 'react-router';


interface userSelection {
  chapter: string,
  choice: string
}

interface allUserSelections {
  [key: string]: userSelection
}

interface Props {
  userData: allUserSelections,
  setUserData: React.Dispatch<React.SetStateAction<allUserSelections>>
}

const Story: React.FC<Props> = ({ userData, setUserData }) => {
  const history = useHistory();
  let userStory = '';
  // Loop through userData selections and concatenate them
  // together to create the story
  for(const locale in userData) {
    console.log('Putting this together');
    const sentence = userData[locale].choice;
    userStory += `${sentence} `;
  }

  const onNewStoryClick = () => {
    setUserData({});
    history.push('/');
  };

  return (
    <main className={styles.Story}>
      <h1>Your story...</h1>
      <p>{userStory}</p>
      <button onClick={onNewStoryClick}>New Story</button>
    </main>
  );
};

Story.propTypes = {
  userData: PropTypes.shape({}).isRequired,
  setUserData: PropTypes.func.isRequired
};

export default Story;
