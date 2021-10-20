import React from 'react';
import { Link } from 'react-router-dom';
import { completedChapters } from '../../utils/interfaces';
import { uppercaseFirstLetter } from '../../utils/utils';
import chapterData from '../../data/chapterData.json';
import PropTypes from 'prop-types';
import styles from './Chapters.module.css';
import { Endpoints } from '../../utils/enums';

interface Props {
  userName: string,
  userSelections: string[],
  completed: completedChapters
}

const Chapters: React.FC<Props> = ({ userName, userSelections, completed }) => {
  // the selection that the user most recently chose:
  const lastLine = userSelections[userSelections.length - 1];

  // chapters is an array of keys; each key is a chapter title
  const chapters: string[] = Object.keys(chapterData);
  
  const chapterList: JSX.Element[] = chapters.map(
    (chapter: string, i: number) => (
      // incomplete chapters are displayed with link
      (completed[chapter])
        ?
        <li key={i}>{uppercaseFirstLetter(chapter)}<br />(completed)</li>
        :
        <Link to={`${Endpoints.Chapters}/${chapter}`} key={i}>
          <li>
            {uppercaseFirstLetter(chapter)}
          </li>
        </Link>
    ));

  return (
    <section className={styles.Chapters}>
      <h1>Chapters</h1>
      <p>
        Hello, {userName}. This is where you create your story.
        Pick a selection from each chapter.
      </p>
      {lastLine && <p>Last line: {lastLine}</p>}
      <ul>{chapterList}</ul>
    </section>
  );
};

Chapters.propTypes = {
  userName: PropTypes.string.isRequired,
  userSelections: PropTypes.array.isRequired,
  completed: PropTypes.shape({}).isRequired
};

export default Chapters;
