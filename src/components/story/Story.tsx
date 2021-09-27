import React from 'react';
import PropTypes from 'prop-types';
import styles from './Story.module.css';
import { useHistory } from 'react-router';
import { userSelections } from '../../utils/types';
import { allUserSelections } from '../../utils/interfaces';

// interface allUserSelections {
//   [key: string]: userSelection
// }

interface Props {
  userData: allUserSelections,
  setUserData: React.Dispatch<React.SetStateAction<allUserSelections>>,
  userSelections: userSelections,
  setUserSelections: React.Dispatch<React.SetStateAction<userSelections>>
}

const Story: React.FC<Props> = ({
  setUserData,
  userSelections,
  setUserSelections
}) => {
  const history = useHistory();
  // let userStory = '';
  // Loop through userData selections and concatenate them
  // together to create the story
  console.log(userSelections);
  // for(const locale in userData) {
  //   console.log('Putting this together');
  //   const sentence = userData[locale].choice;
  //   userStory += `${sentence} `;
  // }

  const userStory = userSelections.reduce((previous, current, index) => {
    if(index < userSelections.length - 1) return previous + current + ' ';
    else return previous + current;
  }, '');

  const onNewStoryClick = () => {
    setUserData({});
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
  userData: PropTypes.shape({}).isRequired,
  setUserData: PropTypes.func.isRequired,
  userSelections: PropTypes.array.isRequired,
  setUserSelections: PropTypes.func.isRequired
};

export default Story;
