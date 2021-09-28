import React from 'react';
import { Link } from 'react-router-dom';
import { ChapterInfo, completedChapters } from '../../utils/interfaces';
import chapterData from '../../data/chapterData.json';
import PropTypes from 'prop-types';
import styles from './Chapters.module.css';

interface Props {
  userName: string,
  completed: completedChapters
}

type ChapterList = ChapterInfo[]

const Chapters: React.FC<Props> = ({ userName, completed }) => {
  const locations: ChapterList = Object.values(chapterData);

  const titles = locations.map(location => location.title);
  console.log(titles);
  console.log(completed);

  const chapters: JSX.Element[] = titles.map((title: string, i: number) => (
    (!completed[title.toLowerCase()])
      ?
      <Link to={`chapters/${title.toLowerCase()}`} key={i}>
        <li>
          {title}
        </li>
      </Link>
      :
      <li>{title} was completed.</li>
  ));

  return (
    <section className={styles.Chapters}>
      <h1>Chapters</h1>
      <p>
        Hello, {userName}. This is where you create your story.
      </p>
      <ul>{chapters}</ul>
    </section>
  );
};

Chapters.propTypes = {
  userName: PropTypes.string.isRequired,
  completed: PropTypes.shape({}).isRequired
};

export default Chapters;
