import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import lands from '../../data/chapterData.json';
import styles from './ChapterDetails.module.css';
import {
  completedChapters,
  Location
} from '../../utils/interfaces';
import { userSelections } from '../../utils/types';

interface Props {
  userSelections: userSelections;
  setUserSelections: React.Dispatch<React.SetStateAction<userSelections>>;
  setCompleted: React.Dispatch<React.SetStateAction<completedChapters>>;
}

const ChapterDetails: React.FC<Props> = ({
  userSelections,
  setUserSelections,
  setCompleted
}) => {
  const { locale } = useParams<{ locale: keyof typeof lands }>();
  const [selection, setSelection] = useState<string>('');
  const totalLands = Object.keys(lands);
  const history = useHistory();

  const onChoiceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelection(e.target.value);
  };

  // eslint-disable-next-line max-len
  const onChoiceSubmit: React.FormEventHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    // Add selection to userSelections array
    setUserSelections(prevState => [...prevState, selection]);

    // Add locale to completed object
    setCompleted(prevState => {
      prevState[locale] = true;
      return prevState;
    });

    // Redirect user to Story component when the number of chapters completed
    // equals the total number of chapters
    if(userSelections.length === totalLands.length - 1) history.push('/story');
    else history.push('/chapters');
    // if(Object.keys(completed).length === totalLands.length) {
    //   history.push('/story');
    // } else history.push('/chapters');
  };

  // Get selections for current chapter from data file
  const setting: Location = lands[locale];

  // Create header for current chapter
  const header = setting.title;

  // Create choices for current chapter
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
  setCompleted: PropTypes.func.isRequired,
  userSelections: PropTypes.array.isRequired,
  setUserSelections: PropTypes.func.isRequired
};

export default ChapterDetails;
