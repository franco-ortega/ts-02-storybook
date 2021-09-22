import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import lands from '../../data/chapterData.json';
import styles from './ChapterDetails.module.css';
// import { useCompleted } from '../../hooks/useCompleted';

interface Props {
  setUserData: React.Dispatch<React.SetStateAction<string[]>>;
  completeChapter: () => void;
}
interface Location {
 title: string,
  choices: string[]
}

const ChapterDetails: React.FC<Props> = ({ setUserData, completeChapter }) => {
  const { locale } = useParams<{ locale: keyof typeof lands }>();
  const [inputData, setInputData] = useState<string>('');
  const history = useHistory();

  // const { completeChapter } = useCompleted();

  // eslint-disable-next-line max-len
  const onChoiceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputData(e.target.value);
  };

  // eslint-disable-next-line max-len
  const onChoiceSubmit: React.FormEventHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setUserData(prevState => {
      console.log(inputData);
      return [...prevState, inputData];
    });

    completeChapter();

    history.push('/chapters');
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
  setUserData: PropTypes.func.isRequired,
  completeChapter: PropTypes.func.isRequired
};

export default ChapterDetails;
