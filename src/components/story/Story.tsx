import React from 'react';
import PropTypes from 'prop-types';
import styles from './Story.module.css';

interface Props {
  userData: string[]
}

const Story: React.FC<Props> = ({ userData }) => {
  // Loop through userData selections and concatenate them
  // together to create the story
  const userStory = userData.reduce((previous, current, index) => {
    if(index < userData.length - 1) return previous + current + ' ';
    else return previous + current;
  }, '');

  return (
    <main className={styles.Story}>
      <h1>Your story...</h1>
      <p>{userStory}</p>
    </main>
  );
};

Story.propTypes = {
  userData: PropTypes.array.isRequired
};

export default Story;
