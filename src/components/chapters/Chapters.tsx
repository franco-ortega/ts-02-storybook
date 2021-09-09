import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Chapters.module.css';
import chapterData from '../../data/chapterData.json';

interface Props {
  userName: string
}

type ChapterInfo = {
  title: string,
  choices: string[]
}

type AllChapterInfo = ChapterInfo[]

const Chapters: React.FC<Props> = ({ userName }) => {
  const locations: AllChapterInfo = Object.values(chapterData);

  const titles = locations.map(location => location.title);

  // eslint-disable-next-line max-len
  const chapterOptions: JSX.Element[] = titles.map((choice: string, i: number) => (
    <Link to={`chapters/${choice.toLowerCase()}`} key={i}>
      <li>
        {choice}
      </li>
    </Link>
  ));

  return (
    <section className={styles.Chapters}>
      <h1>Chapters</h1>
      <p>
        Hello, {userName}. This is where you create your story.
      </p>
      <ul>{chapterOptions}</ul>
    </section>
  );
};

Chapters.propTypes = {
  userName: PropTypes.string.isRequired
};

export default Chapters;
