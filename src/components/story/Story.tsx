import React from 'react';
import PropTypes from 'prop-types';
import styles from './Story.module.css';

interface Props {
  userData: string[]
}

const Story: React.FC<Props> = ({ userData }) => {
  console.log(userData);
  const userStory = userData.map((data, index) => (
    <p key={index}>{data}</p>
  ));

  return (
    <main className={styles.Story}>
      <h1>Your story...</h1>
      <div>{userStory}</div>
    </main>
  );
};

Story.propTypes = {
  userData: PropTypes.array.isRequired
};

export default Story;
