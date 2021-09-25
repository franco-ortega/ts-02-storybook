import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Story.module.css';
import { useHistory } from 'react-router';

// type userSelection = [
//   string,
//   string
// ]

interface userSelection {
  chapter: string,
  choice: string
}

type allUserSelections = {
  [key: string]: userSelection
}

interface Props {
  userData: allUserSelections,
  setUserData: React.Dispatch<React.SetStateAction<allUserSelections>>
}

const Story: React.FC<Props> = ({ userData, setUserData }) => {
  const history = useHistory();
  // Loop through userData selections and concatenate them
  // together to create the story
  // const userStory = userData.reduce((previous, current, index) => {
  //   if(index < userData.length - 1) return previous + current + ' ';
  //   else return previous + current;
  // }, '');

  let userStory = '';
  // let counter = 0;

  // while(counter < 10) {
  //   console.log('counting');

  //   counter++;
  // }

  for(const locale in userData) {
    console.log('Putting this together');
    const sentence = userData[locale].choice;
    userStory += `${sentence} `;
  }

  const onNewStoryClick = () => {
    console.log('New Story clicked');
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

// Story.propTypes = {
//   userData: PropTypes.array.isRequired,
//   setUserData: PropTypes.func.isRequired
// };

export default Story;
