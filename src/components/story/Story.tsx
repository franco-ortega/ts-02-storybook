import React from 'react';
import PropTypes from 'prop-types';
import styles from './Story.module.css';
import { useHistory } from 'react-router';
import { Selections } from '../../utils/types';
import { completedChapters } from '../../utils/interfaces';
import { Endpoints } from '../../utils/enums';

interface Props {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userSelections: Selections;
  setUserSelections: React.Dispatch<React.SetStateAction<Selections>>;
  setCompleted: React.Dispatch<React.SetStateAction<completedChapters>>;
}

const Story: React.FC<Props> = ({
  setUserName,
  userSelections,
  setUserSelections,
  setCompleted
}) => {
  const history = useHistory();

  // Loop through completed selections and concatenate them
  // together to create the story
  const userStory = userSelections.reduce((previous, current, index) => {
    if(index < userSelections.length - 1) return previous + current + ' ';
    else return previous + current;
  }, '');

  const onNewStoryClick = () => {
    setUserSelections([]);
    setCompleted({});
    history.push(`${Endpoints.Chapters}`);
  };
  
  const onNewUserClick = () => {
    setUserName('');
    setUserSelections([]);
    setCompleted({});
    history.push(`${Endpoints.Prologue}`);
  };

  return (
    <main className={styles.Story}>
      <h1>Your story...</h1>
      <p>{userStory}</p>
      <button onClick={onNewStoryClick}>New Story</button>
      <button onClick={onNewUserClick}>New User</button>
    </main>
  );
};

Story.propTypes = {
  setUserName: PropTypes.func.isRequired,
  userSelections: PropTypes.array.isRequired,
  setUserSelections: PropTypes.func.isRequired,
  setCompleted: PropTypes.func.isRequired
};

export default Story;
