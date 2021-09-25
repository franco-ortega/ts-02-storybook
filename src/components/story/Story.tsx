import React from 'react';
import PropTypes from 'prop-types';
import styles from './Story.module.css';
import { useHistory } from 'react-router';

type userSelection = [
  string,
  string
]

interface Props {
  userData: userSelection[],
  setUserData: React.Dispatch<React.SetStateAction<userSelection[]>>
}

const Story: React.FC<Props> = ({ userData, setUserData }) => {
  const history = useHistory();
  // Loop through userData selections and concatenate them
  // together to create the story
  const userStory = userData.reduce((previous, current, index) => {
    if(index < userData.length - 1) return previous + current + ' ';
    else return previous + current;
  }, '');

  const onNewStoryClick = () => {
    console.log('New Story clicked');
    setUserData([]);
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
  userData: PropTypes.array.isRequired,
  setUserData: PropTypes.func.isRequired
};

export default Story;
