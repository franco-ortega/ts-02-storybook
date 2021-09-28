import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Chapters.module.css';
import chapterData from '../../data/chapterData.json';
import { ChapterInfo } from '../../utils/interfaces';

interface Props {
  userName: string
}

type ChapterList = ChapterInfo[]

const Chapters: React.FC<Props> = ({ userName }) => {
  const locations: ChapterList = Object.values(chapterData);

  const titles = locations.map(location => location.title);

  const chapters: JSX.Element[] = titles.map((title: string, i: number) => (
    (!title)
      ?
      <Link to={`chapters/${title.toLowerCase()}`} key={i}>
        <li>
          {title}
        </li>
      </Link>
      :
      <p>{title} was already completed.</p>
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
  userName: PropTypes.string.isRequired
};

export default Chapters;
