import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import chapterData from '../../data/chapterData.json';
import styles from './ChapterDetails.module.css';
import {
  completedChapters,
  Location
} from '../../utils/interfaces';
import { userSelections } from '../../utils/types';
import { uppercaseFirstLetter } from '../../utils/utils';

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
  const history = useHistory();
  const { chapter } = useParams<{ chapter: keyof typeof chapterData }>();
  const [selection, setSelection] = useState<string>('');
  const allChapters = Object.keys(chapterData);

  const onChoiceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelection(e.target.value);
  };

  // eslint-disable-next-line max-len
  const onChoiceSubmit: React.FormEventHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    // Add selection to userSelections array
    setUserSelections(prevState => [...prevState, selection]);

    // Add chapter to completed object
    setCompleted(prevState => {
      prevState[chapter] = true;
      return prevState;
    });

    // Redirect user to Story component when the number of chapters completed
    // equals the total number of chapters
    if(userSelections.length === allChapters.length - 1) history.push('/story');
    else history.push('/chapters');
  };

  const onGoBackClick = () => history.push('/chapters');
  
  // Get selections for current chapter from data file
  const setting: Location = chapterData[chapter];

  // Create header for current chapter
  const header = uppercaseFirstLetter(chapter);

  // Create choices for current chapter
  const options = setting.choices.map((choice, i) => (
    <label key={i} htmlFor={choice}>
      <input
        required
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
      <button onClick={onGoBackClick}>Go Back</button>
    </main>
  );
};

ChapterDetails.propTypes = {
  setCompleted: PropTypes.func.isRequired,
  userSelections: PropTypes.array.isRequired,
  setUserSelections: PropTypes.func.isRequired
};

export default ChapterDetails;
