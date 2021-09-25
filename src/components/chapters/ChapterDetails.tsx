import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import lands from '../../data/chapterData.json';
import styles from './ChapterDetails.module.css';
// import { useCompleted } from '../../hooks/useCompleted';

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
  userData: allUserSelections
  setUserData: React.Dispatch<React.SetStateAction<allUserSelections>>
// setCompleted: React.Dispatch<React.SetStateAction<{[key: string]: boolean}>>
}

interface Location {
 title: string,
  choices: string[]
}

const ChapterDetails: React.FC<Props> = ({ userData, setUserData }) => {
  const { locale } = useParams<{ locale: keyof typeof lands }>();
  const [inputData, setInputData] = useState<string>('');
  const totalLands = Object.keys(lands);
  const history = useHistory();

  // eslint-disable-next-line max-len
  const onChoiceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputData(e.target.value);
  };

  // eslint-disable-next-line max-len
  const onChoiceSubmit: React.FormEventHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setUserData(prevState => {
      //[
      // [
      //   choice: string,
      //   completed: boolean
      // ]
      // [
      //   choice: string,
      //   completed: boolean
      // ]
      //]
      // const completed = true;
      const newItem: userSelection = {
        chapter: locale,
        choice: inputData
      };

      prevState[locale] = newItem;
      console.log(newItem);
      return prevState;

      // return [...prevState, newItem];
    });

    // setCompleted(prevState => {
    //   prevState[locale] = true;
    //   updatedKey = true;
    //   prevState = { ...prevState, updatedKey };
    //   return prevState[locale] = true;
    // });

    if(Object.keys(userData).length === totalLands.length - 1) {
      history.push('/story');
    } else history.push('/chapters');
    // history.push('/chapters');
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
  setUserData: PropTypes.func.isRequired
  // setCompleted: PropTypes.func.isRequired
};

export default ChapterDetails;
