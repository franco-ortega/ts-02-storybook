import React from 'react';
import PropTypes from 'prop-types';
import styles from './Story.module.css';
import { useHistory } from 'react-router';
import { userSelections } from '../../utils/types';
import { completedChapters } from '../../utils/interfaces';

interface Props {
  completed: completedChapters,
  setCompleted: React.Dispatch<React.SetStateAction<completedChapters>>,
  userSelections: userSelections,
  setUserSelections: React.Dispatch<React.SetStateAction<userSelections>>
}

const Story: React.FC<Props> = ({
  setCompleted,
  userSelections,
  setUserSelections
}) => {
  const history = useHistory();

  // Loop through completed selections and concatenate them
  // together to create the story
  const userStory = userSelections.reduce((previous, current, index) => {
    if(index < userSelections.length - 1) return previous + current + ' ';
    else return previous + current;
  }, '');

  const onNewStoryClick = () => {
    setCompleted({});
    setUserSelections([]);
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
  completed: PropTypes.shape({}).isRequired,
  setCompleted: PropTypes.func.isRequired,
  userSelections: PropTypes.array.isRequired,
  setUserSelections: PropTypes.func.isRequired
};

export default Story;
