import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import lands from '../../data/chapterData.json';
import styles from './ChapterDetails.module.css';
import {
  allUserSelections,
  Location,
  // userSelection
} from '../../utils/interfaces';
import { userSelections } from '../../utils/types';

interface Props {
  userData: allUserSelections;
  setUserData: React.Dispatch<React.SetStateAction<allUserSelections>>;
  userSelections: userSelections;
  setUserSelections: React.Dispatch<React.SetStateAction<userSelections>>;
}

const ChapterDetails: React.FC<Props> = ({
  userData,
  setUserData,
  userSelections,
  setUserSelections
}) => {
  const { locale } = useParams<{ locale: keyof typeof lands }>();
  const [inputData, setInputData] = useState<string>('');
  const totalLands = Object.keys(lands);
  const history = useHistory();

  const onChoiceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputData(e.target.value);
  };

  // eslint-disable-next-line max-len
  const onChoiceSubmit: React.FormEventHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setUserData(prevState => {
      // const newItem: userSelection = {
      //   chapter: locale,
      //   choice: inputData
      // };

      prevState[locale] = true;
      return prevState;
    });

    setUserSelections(prevState => {
      console.log('user selection set in array');

      return [...prevState, inputData];
    });

    // Redirect user to Story component when the number of chapters completed
    // equals the total number of chapters
    // if(Object.keys(userData).length === totalLands.length) {
    //   history.push('/story');
    // } else history.push('/chapters');

    if(userSelections.length === totalLands.length - 1) history.push('/story');
    else history.push('/chapters');
  };

  const setting: Location = lands[locale];
  const header = setting.title;
  const options = setting.choices.map((choice, i) => (
    <label key={i} htmlFor={choice}>
      <input
        id={choice}
        type="radio"
        name="user choice"
        value={choice}
        onChange={onChoiceChange}
      />
      {choice}
    </label>
  ));

  return (
    <main className={styles.ChapterDetails}>
      <h1>{header}</h1>
      <p>Choose your words wisely.</p>
      <form action="" onSubmit={onChoiceSubmit}>
        {options}
        <button>Submit</button>
      </form>
    </main>
  );
};

ChapterDetails.propTypes = {
  userData: PropTypes.shape({}).isRequired,
  setUserData: PropTypes.func.isRequired,
  userSelections: PropTypes.array.isRequired,
  setUserSelections: PropTypes.func.isRequired
};

export default ChapterDetails;
